#!/usr/bin/env node

import { readdir, readFile, mkdir, copyFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SKILLS_DIR = join(__dirname, '..', 'skills');
const VERSION = '0.1.0';

const bold = (s) => `\x1b[1m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;
const cyan = (s) => `\x1b[36m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;

async function getSkillRegistry() {
  const registry = {};
  try {
    const categories = await readdir(SKILLS_DIR, { withFileTypes: true });
    for (const cat of categories) {
      if (!cat.isDirectory()) continue;
      const catPath = join(SKILLS_DIR, cat.name);
      const skills = await readdir(catPath, { withFileTypes: true });
      registry[cat.name] = [];
      for (const skill of skills) {
        if (!skill.isDirectory()) continue;
        const skillFile = join(catPath, skill.name, 'SKILL.md');
        if (existsSync(skillFile)) {
          registry[cat.name].push(skill.name);
        }
      }
      registry[cat.name].sort();
    }
  } catch (e) {
    console.error(red(`Error reading skills directory: ${e.message}`));
    process.exit(1);
  }
  return registry;
}

async function listSkills() {
  const registry = await getSkillRegistry();
  const totalSkills = Object.values(registry).reduce((a, b) => a + b.length, 0);

  console.log(`\n${bold('founder-taste')} ${dim(`v${VERSION}`)}\n`);
  console.log(dim(`${totalSkills} skills across ${Object.keys(registry).length} categories\n`));

  for (const [category, skills] of Object.entries(registry).sort()) {
    console.log(`  ${bold(category)} ${dim(`(${skills.length})`)}`);
    for (const skill of skills) {
      console.log(`    ${cyan(skill)}`);
    }
    console.log();
  }
}

async function addSkills(args) {
  const registry = await getSkillRegistry();
  const allSkills = [];
  for (const [cat, skills] of Object.entries(registry)) {
    for (const skill of skills) {
      allSkills.push({ category: cat, name: skill });
    }
  }

  const targetDir = args.includes('--dir')
    ? args[args.indexOf('--dir') + 1]
    : '.founder-taste';

  let toInstall = [];

  if (args.includes('--all')) {
    toInstall = allSkills;
  } else if (args.includes('--category')) {
    const catName = args[args.indexOf('--category') + 1];
    if (!registry[catName]) {
      console.error(red(`\nCategory "${catName}" not found.\n`));
      console.log('Available categories:', Object.keys(registry).sort().join(', '));
      process.exit(1);
    }
    toInstall = allSkills.filter(s => s.category === catName);
  } else {
    const skillName = args.find(a => !a.startsWith('-') && a !== 'add');
    if (!skillName) {
      console.error(red('\nSpecify a skill name, --category <name>, or --all\n'));
      process.exit(1);
    }
    const found = allSkills.find(s => s.name === skillName);
    if (!found) {
      console.error(red(`\nSkill "${skillName}" not found.\n`));
      process.exit(1);
    }
    toInstall = [found];
  }

  let installed = 0;
  let skipped = 0;

  for (const skill of toInstall) {
    const src = join(SKILLS_DIR, skill.category, skill.name, 'SKILL.md');
    const destDir = join(targetDir, skill.category, skill.name);
    const dest = join(destDir, 'SKILL.md');

    if (existsSync(dest)) {
      skipped++;
      continue;
    }

    await mkdir(destDir, { recursive: true });
    await copyFile(src, dest);
    installed++;
    console.log(`  ${green('+')} ${skill.category}/${cyan(skill.name)}`);
  }

  console.log(`\n${bold('Done.')} ${green(`${installed} installed`)}${skipped ? `, ${dim(`${skipped} skipped (already exist)`)}` : ''}`);
  console.log(dim(`Skills saved to ${targetDir}/\n`));
}

async function showInfo(args) {
  const skillName = args.find(a => !a.startsWith('-') && a !== 'info');
  if (!skillName) {
    console.error(red('\nSpecify a skill name: founder-taste info <skill-name>\n'));
    process.exit(1);
  }

  const registry = await getSkillRegistry();
  for (const [cat, skills] of Object.entries(registry)) {
    if (skills.includes(skillName)) {
      const content = await readFile(join(SKILLS_DIR, cat, skillName, 'SKILL.md'), 'utf-8');
      console.log(`\n${dim(`${cat}/`)}${bold(skillName)}\n`);
      console.log(content);
      return;
    }
  }

  console.error(red(`\nSkill "${skillName}" not found.\n`));
  process.exit(1);
}

function showHelp() {
  console.log(`
${bold('founder-taste')} ${dim(`v${VERSION}`)}

Design taste skills for founders building without a designer.

${bold('Usage:')}
  npx github:Dragoon0x/founder-taste ${cyan('<command>')} [options]

${bold('Commands:')}
  ${cyan('add --all')}                 Install all skills
  ${cyan('add --category')} <name>     Install all skills in a category
  ${cyan('add')} <skill-name>          Install a single skill
  ${cyan('list')}                      Show all available skills
  ${cyan('info')} <skill-name>         Display full skill content
  ${cyan('help')}                      Show this help message

${bold('Options:')}
  ${cyan('--dir')} <path>              Custom install directory ${dim('(default: .founder-taste)')}
  ${cyan('--version')}                 Show version

${bold('Examples:')}
  npx github:Dragoon0x/founder-taste add --all
  npx github:Dragoon0x/founder-taste add hero-section
  npx github:Dragoon0x/founder-taste add --category landing-pages
  npx github:Dragoon0x/founder-taste list
`);
}

const args = process.argv.slice(2);
const command = args[0];

if (args.includes('--version')) {
  console.log(VERSION);
  process.exit(0);
}

switch (command) {
  case 'list':
    await listSkills();
    break;
  case 'add':
    await addSkills(args);
    break;
  case 'info':
    await showInfo(args);
    break;
  case 'help':
  case '--help':
  case undefined:
    showHelp();
    break;
  default:
    console.error(red(`\nUnknown command: ${command}\n`));
    showHelp();
    process.exit(1);
}

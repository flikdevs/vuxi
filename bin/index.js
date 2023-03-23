#!/usr/bin/env node

const { program } = require("commander");
const pkg = require("../package.json");
const add = require("../actions/add");

program
  .version(pkg.version)
  .command("add")
  .description("add to project")
  .argument("<what>", "what piece")
  .argument("<name>", "name of your thing")
  .action(add);

program.parse(process.argv);

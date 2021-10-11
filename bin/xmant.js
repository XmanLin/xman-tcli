#!/usr/bin/env node

const { program } = require('commander');

program
    .version(require('../package').version, '-v, --version');

program
	.command('create')
	.description("Create a file")
	.alias('c')
	.action(() => {
		require('../command/createFile')()
	});

program
	.command('create-many')
	.description("Create many folders and files")
	.alias('cm')
	.action(() => {
		require('../command/createManyFiles')()
	});

program.parse(process.argv);

if (!program.args.length) {
    program.help();
}
#!/usr/bin/env node
/**
 * Module dependencies.
 */

const program = require('commander')

// バージョン情報
program
    .version('0.0.1', '-v, --version')

program
    .command('exec <cmd>')
    .alias('ex')
    .description('execute the given remote cmd')
    .option("-e, --exec_mode <mode>", "Which exec mode to use")
    .action((cmd, options) => {
        const mode = options.exec_mode || 'default'
        console.log('exec "%s" using %s mode', cmd, mode)
    }).on('--help', function() {
    console.log('  Examples:')
    console.log()
    console.log('    $ deploy exec sequential')
    console.log('    $ deploy exec async')
    console.log()
})

program.parse(process.argv)
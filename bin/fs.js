exports.command = 'fs <command>'
exports.desc = 'Interact with FUSE-mounted hyperdrives.'
exports.builder = function (yargs) {
  return yargs.commandDir('fs')
}
exports.handler = function (argv) {}

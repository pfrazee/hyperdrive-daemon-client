const chalk = require('chalk')

const loadClient = require('../../lib/loader')

exports.command = 'unmount [mnt]'
exports.desc = 'Unmount a drive. The root drive will be unmounted if a mountpoint is not specified.'
exports.builder = {}

exports.handler = function (argv) {
  loadClient((err, client) => {
    if (err) return onerror(err)
    return onclient(client)
  })

  function onclient (client) {
    client.fuse.unmount(argv.mnt, err => {
      if (err) return onerror(err)
      return onsuccess()
    })
  }

  function onerror (err) {
    console.error(chalk.red('Could not unmount the drive:'))
    console.error(chalk.red(`${err.details || err}`))
  }

  function onsuccess (mnt, key) {
    console.log(chalk.green('Successfully unmounted the drive.'))
  }
}

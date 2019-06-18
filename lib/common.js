const { HyperdriveOptions } = require('./rpc/daemon/common_pb')

function fromHyperdriveOptions (opts) {
  const extracted = {
    key: opts.getKey() || null,
    version: opts.getVersion() || null,
    hash: opts.getHash() || null,
    seed: opts.getSeed(),
    sparse: opts.getSparse(),
    sparseMetadata: opts.getSparsemetadata()
  }
  if (extracted.key) extracted.key = Buffer.from(extracted.key)
  if (extracted.hash) extracted.hash = Buffer.from(extracted.hash)
  return extracted
}

function toHyperdriveOptions (opts) {
  const hdopts = new HyperdriveOptions()
  hdopts.setKey(opts.key)
  hdopts.setVersion(opts.version)
  hdopts.setHash(opts.hash)
  hdopts.setSparse(opts.sparse)
  hdopts.setSparsemetadata(opts.sparseMetadata)
  return hdopts
}

module.exports = {
  fromHyperdriveOptions,
  toHyperdriveOptions
}
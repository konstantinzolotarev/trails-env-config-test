'use strict'

module.exports = {

  trailpack: {
    disabled: [
      'repl'
    ]
  },

  database: {
    stores: {
      mongodbstore: {
        migrate: 'create',
        uri: 'mongodb://localhost:27017/temp',
        options: {}
      }
    }
  }
}

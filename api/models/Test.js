'use strict'

const Model = require('trails-model')

/**
 * @module Test
 * @description TODO document Model
 */
module.exports = class Test extends Model {

  static config () {
  }

  static schema () {
    return {
      question: String
    }
  }
}

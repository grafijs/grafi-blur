;(function(){

import '../node_modules/grafi-formatter/src/formatter'
import '../node_modules/grafi-convolution/src/convolution'
import 'blur'

  var grafi = {}
  grafi.blur = blur

  if (typeof module === 'object' && module.exports) {
    module.exports = grafi
  } else {
    this.grafi = grafi
  }
}())

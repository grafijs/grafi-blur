/**
  ## blur method
  Brief description

  ### Parameters
    - imageData `Object`: ImageData object
    - option `Object` : Option object

  ### Example
      //code sample goes here
 */
function blur (imgData, option) {
  // check options object & set default variables
  option = option || {}
  option.monochrome = option.monochrome || false
  option.type = option.type || 'gaussian'


  var types = {
    average: [1,1,1,1,1,1,1,1,1],
    gaussian: [1,2,1,2,4,2,1,2,1]
  }
  if (!types[option.type]) {
    throw new Error('Could not find type of filter requested')
  }
  var f = types[option.type]
  return convolution(imgData, {
    filter: f,
    divisor: f.reduce(function (p, n) { return p + n }),
    radius: 1,
    monochrome: option.monochrome
  })
}

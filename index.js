function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let range = Math.abs(Number.parseInt(startBlock) - Number.parseInt(endBlock))
    console.log(blockRange)
    if (range > blockRange) {
      let range1 = Math.abs(blockRange - range)
      return `${range1} blocks out of range`
      } else {
        let rangeWithin = Math.abs(range - blockRange)
        return `within range by ${rangeWithin}`
      }
    }
  }

function produceTipCalculator(percent) {
  return function(fare) {
    return percent * fare
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
// createDriver returns a function that returns a class that produces a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.

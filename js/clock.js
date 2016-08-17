var test = " ";

function Clock(testName) {
  this.name = testName;
}

Clock.prototype.clock = function(test) {
  console.write(test);
};


exports.clockModule = Clock;

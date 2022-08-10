// <!-- in a function it refers to the global object and in an object method it refers to the object.-->

var hopperLab = {
    name: "bar",
    func: function() {
    var self = this;
    console.log("outer func: this.name = " + this.name);
    console.log("outer func: self.name = " + self.name);
    (function() {
    console.log("inner func: this.name = " + this.name);
    console.log("inner func: self.name = " + self.name);
    }());
    }
    };
    hopperLab.func();



    // <!-- it will output -->
// outer func: this.name = bar
// outer func: self.name = bar
// inner func: this.name = undefined
// inner func: self.name = bar
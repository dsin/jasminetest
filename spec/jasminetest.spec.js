var app = require("../app/jasminetest");

describe("FizzBuzz", function() {
    it("should return fizz if input is 3", function() {
        result = app.fizzbuzz(3);
        expect(result).toBe("fizz");
    });
    
    it("should return fizz if input is not equal 3", function() {
        result = app.fizzbuzz(2);
        expect(result).toEqual("buzz");
    });
    
    it("should return fizz if input is not equal 3", ()=>{
        result = app.fizzbuzz(1);
        expect(result).toEqual("buzz");
    });
});


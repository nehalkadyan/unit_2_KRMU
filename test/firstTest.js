import { should } from "chai";
// import { addTwo } from "../math/math.js";
import { getDiscountedPrice, greet, isAdult, process } from "../math/math.js";

should()

// testing work

// describe("Testing math func", function(){
//     // it("should return 10 for addTwo(5, 5)", function(){
//     //     const result = addTwo(5, 5)
//     //     result.should.equal(12)
//     // })

//     it("should return 100 for getDiscountedPrice(100, 10, 10)", function(){
//         const result = getDiscountedPrice(100, 10, 10);
//         result.should.equal(101);
//     })
// })


// Statement Coverage

describe("Statement Coverage", function(){
    it("should return Hi! Alice for greet(Alice)", function(){
        const result = greet("Alice");
        result.should.equal("Hi! Alice")
    })

    // it("should give error for greet()", function(){
    //     const result = greet();
    //     result.should.equal("")
    // })
})


// BRANCH COVERAGE

describe("BRANCH COVERAGE", function(){
    it("should return Adult for isAdult(20)", function(){
        const result = isAdult(20);
        result.should.equal("Adult")
    })

    it("should return Minor for isAdult(16)", function(){
        const result = isAdult(16);
        result.should.equal("Minor")
    })
})

// PATH COVERAGE

describe("PATH COVERAGE", function(){
    it("should return Both x and y are positive for process(5,5)", function(){
        const result = process(5,5);
        result.should.equal("Both x and y are positive")
    })
})




// unit testing eg

// export function addTwo(num1, num2){
//     return num1 + num2
// }

// integration testing eg

export function getTotalPrice(price, taxRate){ // price = 100, taxRate = 5%
    const taxToPay = (price * taxRate) / 100

    return price + taxToPay // 105
}

export function getDiscountedPrice(price, taxRate, discount){
    return getTotalPrice(price, taxRate) - (price * discount / 100)
}


// STATEMENT COVERAGE EXAMPLE

export function greet(name){
    return `Hi! ${name}`
}

// BRANCH COVERAGE EXAMPLE

export function isAdult(age){
    if(age >= 18){
        return "Adult"
    }else{
        return "Minor"
    }
}

// PATH COVERAGE


export function process(x, y){
    if(x >= 0){
       if(y >= 0){
        return "Both x and y are positive"
       }else{
        return "x is positive"
       }
    }else{
        return "x is not positive"
    }
}

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

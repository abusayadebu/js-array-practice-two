let friends = ["karim", "rahim", "hasan", "ali"]
for(let friend of friends){
    // console.log(friend)
}

for(let i = 0; i < friends.length; i++){
        // console.log(i)
        // console.log(friends[i])
}

// reverse array
let numbers = [10, 20, 30, 40, 50, 60]

const reverseArray = [];

for(let i = numbers.length - 1; i >= 0; i--){
    // console.log(numbers[i])
    reverseArray.push(numbers[i])
}
// console.log(reverseArray)


// another metho
const reversedArray = numbers.reverse()

// console.log(reversedArray)

// reverse a string 
const address = "Dhaka, bangladesh"

for(let i = address.length; i >= 0; i--){
    // console.log(address[i])
}
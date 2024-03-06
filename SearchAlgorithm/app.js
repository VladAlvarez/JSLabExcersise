// this function has a big-o of O(log(n))
function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]) {
            return middleIndex
        }
        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

let array = [-5, 2, 4, 6, 10]

console.log(binarySearch(array, 10));
console.log(binarySearch(array, 6));
console.log(binarySearch(array, 20));

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch(array, 10));
console.log(linearSearch(array, 6));
console.log(linearSearch(array, 20));
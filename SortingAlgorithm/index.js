function quickSort(arr) {
    if(arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const array = [8, 20, -2, 4, -6]
const array1 = [8, 20, -2, 4, -6, -3, -29, 2, 5]
const array2 = [8, 20, -2, 4, -6, 9, 12, 14]

console.log(quickSort(array));
console.log(quickSort(array1));
console.log(quickSort(array2));
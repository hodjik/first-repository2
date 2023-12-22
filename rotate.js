function rotate(arr, k) {
    let n = arr.length
    k = k % n

    for (let i = 0; i < n - k; i++) {
        arr.push(arr.shift())
    }
}
let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 1
rotate(nums, k)
console.log(nums) 
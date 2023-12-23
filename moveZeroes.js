function moveZeros(nums) {
    let noZero = nums.filter(nums => nums !== 0)
    let zero = nums.filter(nums => nums === 0)
    nums.length = 0
    nums.push(...noZero,...zero)
    return nums
}
console.log(moveZeros([0, 1, 0, 3, 12]));

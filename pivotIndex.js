function pivotIndex(nums) {
    let totalNums = nums.reduce((res, num) => res + num)
    let leftNum = 0
        for (let i = 0; i < nums.length; i++) {
            totalNums -= nums[i]

                if (leftNum === totalNums){
                    return i
                }
                
                leftNum += nums[i]
            
        }

        return -1

}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
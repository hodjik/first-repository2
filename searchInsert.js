function search(arr, num) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num){
        return i
    }        
    
    }
    return arr.length
}
console.log(search([1, 2, 3, 4],5));
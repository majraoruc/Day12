//Only change code below this line
function myRecursion(arr, n) {
    var sum = 0;
    if (n <= 0) {
        return 0;
    } else {
        sum = myRecursion(arr, n - 1) + arr[n - 1];
    }
    return sum;
}
//Only change code above this line

console.log(myRecursion([1, 2, 3, 4], 3));
module.exports = myRecursion;
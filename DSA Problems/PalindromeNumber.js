
var isPalindrome = function(x) {
    if (x < 0|| x % 10 ===0 && x!=0 )return false;
    let str = x.toString();
    let arr = str.split('');
    let reversed = arr.reverse();
    
    return arr.join('') === reversed.join('');
    
};
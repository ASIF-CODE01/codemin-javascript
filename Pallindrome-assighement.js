function isPalindrome(str) {
    let reversed = "";
    
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    
    if (str === reversed) {
        return "It is a palindrome";
    } else {
        return "It is not a palindrome";
    }
}


console.log(isPalindrome("MADAM")); 
console.log(isPalindrome("141")); 
console.log(isPalindrome("sunday"));
console.log(isPalindrome("mom"));
console.log(isPalindrome("dad"));
console.log(isPalindrome("LISTEN"));


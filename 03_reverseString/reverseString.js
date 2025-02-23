const reverseString = function(string) {
    const arrayFromString = string.split('');
    const reversedArrayFromString= arrayFromString.reverse();
    const reversedString = reversedArrayFromString.join('');
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;

function getSum(firstNum) {
    firstNum = +firstNum;
    return function(secondNum) {
        secondNum = +secondNum;
        return firstNum + secondNum
    }
};
console.log(getSum(prompt())(prompt()));
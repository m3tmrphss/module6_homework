function outputNumbers (firstNum, secondNum) {
    const intervalId = setInterval(function() {
        console.log(firstNum);
        if(firstNum == secondNum) {
            clearInterval(intervalId);
        }
        firstNum++;
    }, 1000)
};
outputNumbers(prompt(), prompt());
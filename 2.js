function getNumber(number) {
    if(number > 1000 || number <= 1) {
        return 'Данные неверны';
    } 
    for(let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            return 'Не простое';
        }
    }
    return 'Простое';
};
alert(getNumber(prompt()));
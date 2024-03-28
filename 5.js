const raiseToDegree = (x,n) => {
    if(x > 0 && n > 0) {
        return x**n
    } else {
        return 'Ошибка! x и n могут быть только натуральными числами'
    }
};
raiseToDegree(prompt(),prompt());
function getNumbers () {
    let array = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, '1',  ];
    let oddNumbers = 0;
    let evenNumbers = 0;
    let nullNumbers = 0;
    let nanNumbers = 0;
    for(let i = 0; i <= array.length; i++) {
        let number = array[i];
        if(isNaN(number)) {
            nanNumbers++;
        } else if (number == 0 || number == null) {
            nullNumbers++;
        } else if (number % 2 == 0 && number !== 0) {
            evenNumbers++;
        } else if (number % 2 == 1) {
            oddNumbers++;
        }
    }
    console.log (` чётных - ${evenNumbers}, нечётных - ${oddNumbers}, нулевых - ${nullNumbers}, не чисел - ${nanNumbers}`)    
};
getNumbers();

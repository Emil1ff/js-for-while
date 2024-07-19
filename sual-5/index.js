let newArray= [10,1,2,3,8,9,99,77,44,5];

let enBoyuk = newArray[0];
    for (let i = 1; i < newArray.length; i++) {
        if (newArray[i] > enBoyuk) {
            enBoyuk = newArray[i];
        }
    }
console.log(enBoyuk);
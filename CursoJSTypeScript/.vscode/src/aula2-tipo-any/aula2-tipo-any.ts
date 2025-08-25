// Utilize any apenas em ultimo caso.

function showMessage(msg:any){ // Any ele aceita todos os tipos
    return msg;
}

console.log(showMessage("Hello World"));
console.log(showMessage(1));
console.log(showMessage([1, 2, 3]));
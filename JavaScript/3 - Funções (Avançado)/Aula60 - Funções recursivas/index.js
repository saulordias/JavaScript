function recursiva(max){ 

    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max); // Chamada recursiva

    // as funções recursivas são aquelas que se chamam dentro delas mesmas
    // Call Stack - Pilha de chamadas
}

recursiva(-10);
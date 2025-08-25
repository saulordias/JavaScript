/* RECOMENDADOS */

// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Exemplo com Type Assertion (as)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//HTMLElement

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();



/* NÃO RECOMENDADO */

// Type assertion
const body4 = (document.querySelector('body') as unknown) as number;

// Exemplo com Non-null assertion operator (!) (Não aconselhavel)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
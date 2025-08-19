// GREEDY E NON-GREEDY (LAZY)

//<.*>.*       <\/.+>

const { html } = require ('./base.js');


console.log(html);


console.log(html.match(/<.*>.*<\/.+>/g)); //greedy
console.log(html.match(/<.*?>.*?<\/.+?>/g)); // non-greedy
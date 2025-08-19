// ENCONTRA TODAS AS PALAVRAS

const palavrasRegEx = /([\wÀ-ú]+)/gi

// Não números

const naoNumerosRegEx = /\D/

// Valida Ip

const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)/g

// Valida CPF

const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g

//Valida telefone

const telefoneRegExp = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

// Validar senhas fortes

const senhasFortesRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$´^%\]]).{8,}$/g

// Validar e-mails

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
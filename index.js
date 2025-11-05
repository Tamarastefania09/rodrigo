const prompt = require('prompt-sync')({sigint: true});

const fechaInput = prompt("Ingresa una fecha en formato: ");
const fecha = fechaInput.trim();


if (!/^\d{4}-\d{1,2}-\d{1,2}$/.test(fecha)) process.exit(0);


const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${fecha}/v1/currencies/eur.json`;


fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.eur && typeof data.eur.ars !== "undefined") {
            console.log(data.eur.ars);
        }
    })
    .catch(() => {});
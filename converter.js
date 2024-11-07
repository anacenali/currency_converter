const apiKey = '7b0b4a851916cae1c4aecb84';
const apiURL = ` https://v6${apiKey}.exchangerate-api.com/v6/7b0b4a851916cae1c4aecb84/latest/`;

//função para consulta á taxa de câmbio via API

async function getExchangeRate(ofcoins, forcoins) {
    try {

        const response = await fetch(`${apiURL}${ofcoins}`);
        const data = response.json();

        if (data.result === "success") {
            return data.conversion_rates[forcoins];

        } else {
            throw new Error('Erro ao buscar taxa de câmbio');
        }
    } catch (error) {
        console.error("Erro:", error);
        return null;

    }
}
// #################################################################

// executador da API

document.getElementById('Form-convert').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Obter valores de entrada
    const valor = parseFloat(document.getElementById('amount').value);
    const ofcoins = document.getElementById('ofcoins').value;
    const forcoins = document.getElementById('forcoins').value;

    // variavel que vai receber o valor da API
    const exchangeRate = await getExchangeRate(ofcoins, forcoins);

    // traz o valor em tempo real 
    if(exchangeRate){
        const convertedValue = valor * exchangeRate;

        // console.log(convertedValue);
        
        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)} ${forcoins};` // para aparecer apenas dois digitos
    }
})
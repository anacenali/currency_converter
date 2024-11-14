// Chave de autenticação para acessar a API de taxas de câmbio.
const apiKey = '087ef5ce0c86015123b35ace';

//URL da API que inclui a chave. Esta URL será complementada com o código da moeda de origem durante a consulta.
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`; 

//função para consulta á taxa de câmbio via API

async function getExchangeRate(ofcoins, forcoins) {
    try {

        // Faz uma requisição à API para obter a taxa de câmbio da moeda de origem.
        const response = await fetch(`${apiURL}${ofcoins}`);
    
        // Converte a resposta para JSON 
        const data = await response.json();

    // Verifica se o resultado é "success".
        if (data.result === "success") {
            return data.conversion_rates[forcoins];

        } else {
            throw new Error('Erro ao buscar taxa de câmbio');
        }

        // Captura qualquer erro na requisição ou processamento e retorna
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
    const valor = parseFloat(document.getElementById('value-amount').value);
    const ofcoins = document.getElementById('ofCoins').value;
    const forcoins = document.getElementById('forCoins').value;

    // variavel que vai receber o valor da API
    const exchangeRate = await getExchangeRate(ofcoins, forcoins);

    // traz o valor em tempo real 
    if(exchangeRate){
        const convertedValue = valor * exchangeRate;

        // console.log(convertedValue);
        
        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)}${forcoins};` // para aparecer apenas dois digitos
   

          // Configura o botão para executar a conversão
 
        } else{
            alert('Erro ao buscar a cotação. Tente novamente');
        }
     
})
# Currency converter

## Descrição
Este é uma evolução do projeto anterior [Simple converter](https://github.com/anacenali/Simple-converter). Seu objetivo é oferecer uma aplicação web moderna e funcional, permitindo que os usuários convertam valores entre diferentes moedas. Ele foi criado utilizando HTML5, CSS3, e JavaScript puro, destacando-se pela simplicidade e eficiência. A principal melhoria em relação ao projeto anterior é a integração com uma API de câmbio, que permite consultar as taxas de conversão em tempo real. Isso garante que as cotações utilizadas sejam sempre precisas e atualizadas, refletindo as variações do mercado financeiro de forma dinâmica e confiável. Com esta evolução, o projeto torna-se não apenas mais prático, mas também mais próximo de uma aplicação real, capaz de atender a demandas cotidianas dos usuários.

## Funcionalidades
- Conversão de moedas em tempo real usando uma API externa.
- Suporte para as moedas: Real (BRL), Dólar (USD), Euro (EUR) e Libra (GBP).
- Interface intuitiva com campos de entrada e seleção.
- Botões para converter e limpar os dados.

## Tecnologias utilizadas

- HTML5: Estruturação da página.
- CSS3: Estilização e layout responsivo.
- JavaScript: Lógica da aplicação e consumo da API.

---------

- **converter.html**: Contém a estrutura HTML da aplicação.
- **converter.css**: Estilização principal para layout e formatação.
- **converter.js**: Script de JavaScript para manipulação de eventos e cálculo da conversão.
- **variables.css** e **fonts/**: Arquivos adicionais para variáveis de estilo e fontes personalizadas.

## Pré-requisitos

- Navegador moderno compatível com JavaScript.
- Conexão com a internet para acessar a API.

## Estrutura do Projeto

``` 
/
├── index.html         # Página principal
|
├── css/
│   ├── converter.css  # Estilização principal
│   ├── variable.css   # Variáveis de cores e fontes
├── fonts/
│   ├── Mulish-Medium.ttf
│   ├── Mulish-Light.ttf
│   └── Mulish-Bold.ttf
├── converter.js       # Script JavaScript 
```

## Código
### HTML

A estrutura principal da página está no arquivo index.html. Ele define:

- Um formulário com campos para valor, moedas e botões.
- Uma div para exibir os resultados.

### JavaScript
O arquivo converter.js contém:

1. Uma função assíncrona que:
- Consulta a API com a moeda de origem.
- Retorna a taxa de conversão.
2. Um evento para submeter o formulário e calcular o valor convertido.

### CSS
- converter.css: Define o layout, estilos dos campos, botões e animações.
- variable.css: Contém variáveis para facilitar personalizações.


## Como Usar o Projeto

1. Abra o arquivo [converter.html](http://127.0.0.1:5500/converter.html) em um navegador web.
2. Insira o valor, selecione a moeda de origem e a moeda de destino.
3. Clique em **Converter** para obter o valor convertido.
4. Utilize o botão **Limpar** para redefinir todos os campos.

## Imagem do site 

![](Captura%20de%20tela%202024-11-14%20080136.png)

## Contatos

Este projeto foi desenvolvido em colaboração com um colega de turma, com o auxilio do professor [Leonardo Rocha](https://github.com/leonardossrocha) combinando esforços para a construção de uma aplicação de conversão de moedas.

* [Chrystian Almeida](https://github.com/ESChrystian/)

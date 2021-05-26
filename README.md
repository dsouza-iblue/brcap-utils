# BRCAP-Utils
Biblioteca utilitária utilizada pela equipe de desenvolvimento da Brasil Cap.

## Instalação
`$ npm install brcap-utils`

## Método utilitário para Validação de CPF
Exemplo de utilização:

    const Util = require('brcap-utils');
    let cpfEhValido = Util.cpfEhValido('423.375.020-07');
    if(cpfEhValido){
        //faz algo
    }

## Método utilitário para obter o próximo dia útil a partir de uma data, somando os dias desejados
Deve-se informar os seguintes parâmetros: 
      data (data inicial), 
      numeroDias (número de dias úteis que será somado a data inicial), 
      tableNameFeriado (nome da tabela de feriado no DynamoDB),
      region (nome da região que o DynamoDB está localizado na AWS).

Callback (erro, resultado):
    erro: null se não houver erro ou o seguinte objeto se houver erro:
    {
      statusCode: number,
      mensagem: string
    }
    resultado: data do próximo dia útil com o tipo string no formato 'YYYY-MM-DD' se não houver erro ou null se houver erro.

Exemplo de utilização:
    
    function obterProximoDiaUtil(req, res) {
        const Util = require('brcap-utils');
        Util.getProximoDiaUtil('2018-02-09', 2,
            'feriado_table', 'sa-east-1', (erro, resultado) => {
                if (erro) {
                    res.status(erro.statusCode ? erro.statusCode : 500)
                        .json(erro.stack ? erro.stack : erro.mensagem ? erro.mensagem : erro);
                } else {
                    res.status(200).json({ proximoDiaUtil: resultado });
                }
            });
    }

## Método utilitário para validar um objeto é nulo (null) ou indefindo (undefined)
Exemplo de utilização:
    let mensagem = [];
    let validator = mensagem.concat(
        validaNotEmpty("data", data),
            validaNotEmpty("numeroDias", numeroDias),
            validaNotEmpty("tableNameFeriado", tableNameFeriado),
            validaNotEmpty("region", region)
        );

    if (validator.length > 0) {
        return validator;
    } else {
        return "validado"
    }

## Método utilitário para validar se o campo informado é uma data válida
Exemplo de utilização:
    let mensagem = [];
    let validator = mensagem.concat(
            validaData("dataInicio", dataInicio),
            validaData("dataFim", dataFim)
        );

    if (validator.length > 0) {
        return validator;
    } else {
        return "validado"
    }

## Método utilitário para validar se o campo informado é um valor numérico.
Exemplo de utilização:
    let mensagem = [];
    let validator = mensagem.concat(
            validaNumeric("numeroDias", numeroDias),
            validaNumeric("prazo", prazo)
        );

    if (validator.length > 0) {
        return validator;
    } else {
        return "validado"
    }

## Método utilitário para buscar os lote contábeis abertos.

#### Deve passar os seguintes parâmetros:
- {Model} modelLoteContabil - Instância da model do sequelize do lote contábil
- {string} moduloContabil - O módulo contábil entre `TR`, `GL` ou `AP`
- {number} idTipoEventoContabil - ID do tipo de evento contábil
- {string} situacaoContabil - A situação contábil entre `A`, `S`, `I`, `E`, `P`, `R` ou `X`

#### Exemplo de utilização:
```js
const Util = require('brcap-utils');
const model = require('../models/Model');

const { MODULO_CONTABIL, SITUACAO_CONTABIL } = Util;

Util.buscarLotesEmAberto(model.getLoteContabil(), MODULO_CONTABIL.GL, 1, SITUACAO_CONTABIL.R);
```

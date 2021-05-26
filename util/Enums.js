// @ts-check

/** @enum {string} */
const MODULO_CONTABIL = Object.freeze({
  TR: 'TR',
  GL: 'GL',
  AP: 'AP',
});

/**
 * * Descrição das Enums
 * * A - ABERTO: Lote aberto para que o sistema inclua novos lançamentos, até a execução da exportação que irá fechar o lote.*;
 * * S - SUCESSO: Todos os lançamentos foram exportados para o SAP;
 * * I - INSUCESSO: Falha na exportação para o SAP. Pode ocorrer 2 situações: Nenhum lançamento foi exportado para o SAP ou,
 *      somente alguns lançamentos foram exportados, ou seja, ocorreu uma exportação parcialmente;
 * * E - ERRO_PARCIAL: Lançamentos parcialmente exportados para o SAP;
 * * P - PENDENTE: Processo de exportação foi executado, não apresentou erro e será necessário confirmar com a área usuária se o
 *      lote foi exportado ou não para o SAP;
 * * R - REVERSAO: Lote com lançamentos de reversão, pendentes de exportação. Nenhum outro lançamento que não seja de reversão
 *      tratados pelo usuário, porerá ser inclído nesse lote; e
 * * X - MANUAL: Tratados pela sustentação que não devem ser exportados.
 *
 * @enum {string}
 */
const SITUACAO_CONTABIL = Object.freeze({
  A: 'A',
  S: 'S',
  I: 'I',
  E: 'E',
  P: 'P',
  R: 'R',
  X: 'X',
});


module.exports = {
  MODULO_CONTABIL,
  SITUACAO_CONTABIL,
};

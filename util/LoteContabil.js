// @ts-check

/**
 * @typedef { import('../types').IModel } Model
 */

const Sequelize = require('sequelize');
const {
  MODULO_CONTABIL,
  SITUACAO_CONTABIL,
} = require('./Enums');

class LoteContabil {
  /**
   * @param {Model} modelLoteContabil - Sequelize.Model
   * @param {string} moduloContabil
   * @param {number} idTipoEventoContabil
   * @param {string} situacaoContabil
   * @return {Promise<any>}
   */
  static async buscarLotesEmAberto(modelLoteContabil, moduloContabil, idTipoEventoContabil, situacaoContabil) {
    try {
      this.validarModuloContabil(moduloContabil);
      this.validarSituacaoContabil(situacaoContabil);

      return await modelLoteContabil.find({
        where: {
          moduloContabil,
          tipoEventoContabil: idTipoEventoContabil,
          situacao: situacaoContabil,
          dataFechamento: { $eq: null },
        },
        attributes: [[Sequelize.fn('min', Sequelize.col('ID_LOTE_CONTAB')), 'min']],
        raw: true,
        nest: true,
      });
    } catch (e) {
      throw e;
    }
  }

  /**
   * @param {string} modulo
   * @returns {LoteContabil}
   */
  static validarModuloContabil(modulo) {
    if (modulo && MODULO_CONTABIL[modulo]) return this;
    throw new Error('Módulo contábil não existe.');
  }

  /**
   * @param {string} situacao
   * @returns {LoteContabil}
   */
  static validarSituacaoContabil(situacao) {
    if (situacao && SITUACAO_CONTABIL[situacao]) return this;
    throw new Error('Situação contábil não existe.');
  }
}

module.exports = LoteContabil;

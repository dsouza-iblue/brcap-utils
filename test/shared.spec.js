const { expect } = require('chai');

const {
  isString, isUndefined, isNil, isObject,
} = require('../util/shared');

describe('Shared', () => {
  describe('isString', () => {
    it('deve retornar verdadeiro quando passado um valor do tipo string', () => {
      expect(isString('teste')).to.be.true;
    });

    it('deve retornar falso quando passado um valor do tipo diferente de string', () => {
      expect(isString(123)).to.be.false;
    });
  });

  describe('isUndefined', () => {
    it('deve retornar vardadeiro quando passado um valor do tipo undefined', () => {
      expect(isUndefined(undefined)).to.be.true;
    });

    it('deve retornar falso quando passado um valor do tipo diferente undefined', () => {
      expect(isUndefined('teste')).to.be.false;
    });
  });

  describe('isNil', () => {
    it('deve retornar vardadeiro quando passado um valor do tipo undefined ou null', () => {
      expect(isNil(undefined)).to.be.true;
      expect(isNil(null)).to.be.true;
    });

    it('deve retornar falso quando passado um valor do tipo diferente undefined ou null', () => {
      expect(isNil('teste')).to.be.false;
    });
  });

  describe('isObject', () => {
    it('deve retornar vardadeiro quando passado um valor do tipo object', () => {
      expect(isObject({ teste: 'teste' })).to.be.true;
    });

    it('deve retornar falso quando passado um valor do tipo diferente object', () => {
      expect(isObject('teste')).to.be.false;
    });
  });
});

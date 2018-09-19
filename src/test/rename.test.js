'use strict';

const arithmetic = require('../lib/arithmetic');

describe('#arithmetic.js', () => {
  describe('Happy path', () => {
    test('Checking if return value is correct number', () => {
      expect(arithmetic.Sum(5, 10)).toEqual(15);
      expect(arithmetic.Sub(20, 10)).toEqual(10);
    });
  });

  describe('Sad path', () => {
    test('Checking if output is null if not a number', () => {
      expect(arithmetic.Sum(5, 'banana')).toEqual(null);
      expect(arithmetic.Sub(20, 'grape')).toEqual(null);
    });
  });
});

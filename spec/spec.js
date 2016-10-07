var pow = require('../js/pow.js');

describe("Test", function() {

  it("pow() test 2^3", function() {
    expect(pow(2,3)).toBe(8);
  });

  it("pow() test 7^1", function() {
    expect(pow(7,1)).toBe(7);
  });

  it("pow() test 123^0", function() {
    expect(pow(123,0)).toBe(1);
  });

  it("pow() test 2^-2", function() {
    expect(pow(2,-2)).toBe(0.25);
  });

  it("pow() test 0^-3", function() {
    expect(pow(0,-3)).toBe('Деление на ноль не возможно');
  });

});
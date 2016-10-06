var pow = require('../js/pow.js');

describe("Test", function() {

  it("pow() test", function() {

    expect(pow(2,3)).toBe(8);

    expect(pow(7,1)).toBe(7);

    expect(pow(123,0)).toBe(1);

    expect(pow(2,-2)).toBe(0.25);

    expect(pow(0,-3)).toBe('Деление на ноль не возможно');
  });

});
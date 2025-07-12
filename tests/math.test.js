const { add, sub } = require('../math');

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
});

test("One euro should be 1.206 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.2;
    expect(dollars).toBe(expected);
});

test("One dollar should be 127.9 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = 1 * 127.9;
    expect(yen).toBe(expected);
});

test("One yen should be 0.0055 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(1);
    const expected = 1 * 0.0055;
    expect(pound).toBe(expected);
});


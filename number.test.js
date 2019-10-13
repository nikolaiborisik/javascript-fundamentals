describe("Numbers", () => {
  it("Should use remainder operator '%' ", () => {
    const a = 15;
    const b = 10;

    expect(/* ??? */).toBe(5);
    expect(/* ??? */).toBe(0);
  });

  test("Should get average of 3 numbers", () => {
    expect(/* average(2, 4, 6)*/).toBe(4);
    expect(/* average(-5, 12, -7) */).toBe(0);
  });

  test("Should get a last digit of the number", () => {
    expect(/* last(123) */).toBe(3);
    expect(/* last(3982) */).toBe(2);
  });

  test("Should sum the digits of a given number", () => {
    expect(/* sumDigits(123) */).toBe(6);
    expect(/* sumDigits(53) */).toBe(8);
  });

  test("Should return true if specified number is prime", () => {
    expect(/* isPrime(7); */).toBe(true);
    expect(/* isPrime(4) */).toBe(false);

    // TODO: Write additional tests
  });

  test("Should convert string to number", () => {
    expect(/* convert('234') */).toBe(234);
  });

  test("Should find highest value", () => {
    // TODO: Write 2 functions max and max2. Only one of them should use Math

    expect(/* max(1, 2) */).toBe(2);
    expect(/* max2(1, 7, 2, 8, 5) */).toBe(8);
  });

  test("Should find lowest value", () => {
    expect(/* min(2, 3, 9, 4, 1, 5) */).toBe(1);
    expect(/* min2(2, 3, 9, 4, 1, 5) */).toBe(1);
    // TODO: Write additional tests
  });

  test("Should round up a value to the nearest integer", () => {
    expect(/*  ??? 1 */).toBe(1);
    expect(/* ??? 1.8 */).toBe(2);
    expect(/* ??? 1.2 */).toBe(1);
    expect(/* ??? -1.2 */).toBe(/* ??? */);
  });

  test("Should get the largest integer less than or equal to a given number.  ", () => {
    expect(/* ??? 1 */).toBe(1);
    expect(/* ??? 1.2 */).toBe(1);
    expect(/* ??? 1.8 */).toBe(1);

    // TODO: Write additional tests
  });

  test("Should return the base10 representation of a binary string", function() {
    expect(/* ??? 11000000 */).toBe(192);
  });

  test("Should convert an eight-bit string number to a binary string", function() {
    expect(/* ??? 127 */).toBe("1010111");
    expect(/* ??? 65 */).toBe("110101");
  });
});

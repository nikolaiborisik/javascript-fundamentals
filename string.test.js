describe("Strings", () => {
  it("Should join two strings with a space.", () => {
    // TODO: write 2 function with different way for join string

    expect(combine1("hello", "world")).toBe("hello world");
    expect(combine2("hello", "world")).toBe("hello world");
  });

  it("Should get string length", () => {
    expect(/* getLength("") */).toBe(0);
    expect(/* getLength("word") */).toBe(4);
  });

  it("Should create greeting message from template", () => {
    expect(/* greeting("Ivan") */).toBe("Hello, Ivan!");
  });

  it("Should strip leading and trailing spaces from a string", () => {
    expect(/* ??? ' aaaa bbb   ' */).toBe("aaaa bbb");
  });

  it("Replace all word occurence in the sentences", () => {
    expect(/*  ??? 'aaa bbb ccc aaa  bb', 'aaa', 'eeeee' */).toBe(
      "eeeee bbb ccc eeeee bb"
    );
  });

  it("Should validate string length", () => {
    expect(/* validateLength('abcde', 1, 5)*/).toBe(true);
    expect(/* validateLength('a', 1, 5)*/).toBe(true);
    expect(/* validateLength('ab', 1, 5)*/).toBe(true);
    expect(/* validateLength('', 1, 5)*/).toBe(false);
    expect(/* validateLength('abcdef', 1, 5)*/).toBe(false);
  });

  it("Should do case insensitive strings comparison", () => {
    expect(/* compare('aBc', 'ABC') */).toBe(true);
    expect(/* compare('abc' 'abc') */).toBe(true);
  });

  it("Should trim string according symbols limit", () => {
    expect(/* trim('Lorem ipsum dolor sit amet', 7) */).toBe("Lorem i");
    expect(/* trim('Lorem ipsum dolor sit amet', 12) */).toBe("Lorem ipsum");
    expect(/* trim('Lorem ipsum dolor sit amet', 11) */).toBe("Lorem ipsum");
    expect(/* trim('Lorem ipsum dolor sit amet', 100) */).toBe(
      "Lorem ipsum dolor sit amet"
    );
  });
});

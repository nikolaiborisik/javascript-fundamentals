describe('THIS', () => {
  it('Should invoke function with specific this', () => {
    // DON'T CHANGE
    const a = { msg: 'aaa' };
    const b = { msg: 'bbb' };

    // DON'T CHANGE
    function example() {
      return this.msg + ' ' + this.msg;
    }

    expect(/* ??? */).toBe('aaa aaa');
    expect(/* ??? */).toBe('bbb bbb');
  });

  it('Should create function  connected with specific this', () => {
    // DON'T CHANGE
    function fn() {
      return this.name;
    }
    // DON'T CHANGE
    const tom = { name: 'Tom', age: 22 };
    const bob = { name: 'Bob', get: 50 };

    // TODO: fix
    const getTomName = fn;
    const getBobName = fn;

    expect(getTomName()).toBe('Tom');
    expect(getBobName()).toBe('Bob');
  });

  test('Function from object method. Fix me', () => {
    // DON'T CHANGE
    const person = {
      firstName: 'Ivan',
      secondName: 'Ivanov',
      age: 20,

      sayHello: function() {
        return `Hi, ${this.firstName}!`;
      }
    };

    // TODO: FIX ME
    const sayHello = person.sayHello;

    expect(sayHello()).toBe(person.sayHello());
  });
});

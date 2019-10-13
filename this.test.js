describe('THIS', () => {
  it('Should invoke function with specific this', () => {
    const a = { msg: 'aaa' };
    const b = { msg: 'bbb' };

    function example() {
      return this.msg + ' ' + this.msg;
    }

    expect(/* ??? */).toBe('aaa aaa');
    expect(/* ??? */).toBe('bbb bbb');
  });

  it('Should create function  connected with specific this', () => {
    function fn() {
      return this.name;
    }
    const tom = { name: 'Tom', age: 22 };
    const bob = { name: 'Bob', get: 50 };

    // TODO: fix
    const getTomName = fn;
    const getBobName = fn;

    expect(getTomName()).toBe('Tom');
    expect(getBobName()).toBe('Bob');
  });

  test('Function from object method. Fix me', () => {
    const person = {
      firstName: 'Ivan',
      secondName: 'Ivanov',
      age: 20,

      sayHello: function() {
        return `Hi, ${this.firstName}!`;
      }
    };

    const sayHello = person.sayHello;

    expect(sayHello()).toBe(person.sayHello());
  });
});

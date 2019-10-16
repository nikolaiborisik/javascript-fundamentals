const PUT_ANSWER_HERE = Symbol();

describe('Objects', () => {
  it('Fix me', () => {
    function hasAccess(role) {
      if (role == { type: 'admin' }) {
        return true;
      } else {
        return false;
      }
    }

    expect(hasAccess({ type: 'admin' })).toBe(true);
    expect(hasAccess({ type: 'anonymous' })).toBe(false);
  });

  it('Should clone object', () => {
    const person1 = {
      firstName: 'Ivan',
      secondName: 'Ivanov'
    };

    const person2 = person1;
    person2.firstName += ' Jr.';

    expect(person1.firstName).toBe('Ivan');
    expect(person2.firstName).toBe('Ivan Jr.');
    expect(person2.secondName).toBe('Ivanov');
  });

  it('Creates an object composed of picked object`s properties.', () => {
    function pick(obj, props) {}
    const object = { a: 1, b: '2', c: 3 };

    expect(pick(object, ['a', 'c'])).toStrictEqual({ a: 1, c: 3 });
    expect(pick(object, ['c'])).toStrictEqual({ c: 3 });
  });


  it('Performs shallow comparison between two values to determine if they are equivalent.', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const obj3 = { a: 1, b: 4 };

    expect(/* compare(obj1, obj2) */).toBe(true);
    expect(/* compare(obj1, obj3) */).toBe(false);
  });

  it('Performs deep comparison between two values to determine if they are equivalent.', () => {
    const obj1 = { a: 1, b: { a: 2 } };
    const obj2 = { a: 1, b: { a: 2 } };

    expect('/* compare(obj1, obj2) */').toBe(true);
  });

  it('Should get value from object by path. If the resolved value is undefined, the default value should be returned.', () => {
    function get(obj, path) {}

    expect(get({ a: { b: { c: 3 } } }, 'a')).toStrictEqual({ b: { c: 3 } });
    expect(get({ a: { b: { c: 3 } } }, 'a.b.c')).toBe(3);
    expect(get({ a: { b: { c: 1, d: 2 } } }, 'a.b')).toStrictEqual({
      c: 1,
      d: 2
    });
  });

});

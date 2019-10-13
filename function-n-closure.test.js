describe('', () => {
  test('Should return  composition of two functions', () => {
    function add5(x) {
      return x + 5;
    }

    function mul3(x) {
      return x * 3;
    }

    expect(/* compose(  add5, mul3)(2) */).toBe(add5(mul3(2)));
  });

  test('Should create new user with unique number identifier using increment', () => {
    expect(/* createUser("Ivan") */).toStrictEqual({ name: 'Ivan', id: 1 });
    expect(/* createUser("Petr").name */).toBe('Petr');
    expect(/* createUser("Anna").id */).toBe(3);
  });

  test('Should create function that each time return new value incremented by incrementValue and start from start', () => {
    function createIncrementor(start, incrementValue) {}
    const nextFrom10By7 = createIncrementor(10, 7);
    expect(nextFrom10By7()).toBe(10);
    expect(nextFrom10By7()).toBe(17);
    expect(nextFrom10By7()).toBe(24);
  });

  test('Fix me. Function creation inside cycle. Find 2 different solutions', () => {
    function solution1(from, to) {
      const result = [];
      for (var i = from; i <= to; i++) {
        result.push(function() {
          return i;
        });
      }
      return result;
    }

    function solution2(from, to) {
      const result = [];
      for (var i = from; i <= to; i++) {
        result.push(function() {
          return i;
        });
      }
      return result;
    }

    const result1 = solution1(10, 100);
    const result2 = solution2(10, 100);
    expect(result1[0]()).toBe(10);
    expect(result1[10]()).toBe(20);
    expect(result1[90]()).toBe(100);
    expect(result2[0]()).toBe(10);
    expect(result2[10]()).toBe(20);
  });

  test('Should works as expected. Fix me', () => {
    let a = 0;
    function foo(callback) {
      function inner() {
        // DON"T CHANGE ME
        a++;
        return a;
      }
      return {
        fromInner: inner,
        fromCallback: callback
      };
    }
    function getCallbackFn() {
      return function callbackFn() {
        // DON'T change me
        a += 2;
        return a;
      };
    }

    const fn1 = foo(callbackFn);
    const fn2 = foo(callbackFn);

    expect(fn1.fromInner()).toBe(11);
    expect(fn2.fromInner()).toBe(11);
    expect(fn1.fromCallback()).toBe(2);
    expect(fn2.fromCallback()).toBe(2);
    expect(fn1.fromInner()).toBe(12);
    expect(fn2.fromInner()).toBe(12);
    expect(fn1.fromCallback()).toBe(4);
    expect(fn2.fromCallback()).toBe(4);
  });

  test('Should use private property', () => {
    let obj1; // createTestObject();
    let obj2; // createTestObject();
    obj1.setValue(10);
    expect(obj1.getValue()).toBe(10);
    obj2.setValue('obj2');
    expect(obj2.getValue()).toBe('obj2');
    expect(obj1.getValue()).toBe(10);
    expect(Object.keys(obj1).length).toBe(2);
  });

  test('Should create multiply function', () => {
    let mul5; // = multiply(5);
    let mul20; // = multiply(20);

    expect(mul5(1)).toBe(5);
    expect(mul5(7)).toBe(35);
    expect(mul20(3)).toBe(60);
  });

  test('Calculate function invocation', () => {
    function fn() {
      return test;
    }

    function calcCall(func) {
      // TODO: implement
      return [func, () => 0];
    }

    const [callFn, getFnCount] = calcCall(fn);
    const [callFn2, getFn2Count] = calcCall(fn);

    callFn();
    callFn();
    callFn();
    expect(getFnCount()).toBe(3);
    callFn();
    expect(getFnCount()).toBe(4);
    callFn2();
    expect(getFn2Count()).toBe(1);
    callFn2();
    expect(getFn2Count()).toBe(2);
  });

  test('Should cache the result of function with single argument', () => {
    function memoize(fn) {
      // TODO: implement
    }

    let invokesCount = 0;
    function formula(x) {
      // Don't change
      invokesCount++;
      return 10 * x + 5;
    }

    const memoizedFormula = memoize(formula);

    expect(memoizedFormula(10)).toBe(105);
    expect(memoizedFormula(10)).toBe(105);
    expect(invokesCount).toBe(1);
    expect(memoizedFormula(5)).toBe(55);
    expect(invokesCount).toBe(2);
  });

  test('logger method should log start and end of call of the standard js function', () => {
    const logger = {
      messages: [],
      logStart: function(name) {
        this.messages.push(`Start ${name}`);
      },

      logEnd: function(name) {
        this.messages.push(`End ${name}`);
      }
    };

    function logMe(fn) {
      // TODO: implement
    }

    function example() {}
    const loggedExample = logMe(example);
    loggedExample();
    expect(logger.messages).toStrictEqual(['Start example', 'End example']);
  });

  test('Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation. The func is invoked with the this binding and arguments of the created function.', () => {
    let callsCount = 0;
    function init() {
      callsCount++;
    }

    function once(fn) {
      // TODO: implement
    }

    const initialize = once(init);
    initialize();
    initialize();
    initialize();

    expect(callsCount).toBe(1);
  });

  test('Creates a function that invokes func with partials prepended to the arguments it receives. ', () => {
    function partial(fn, arg1) {
      // TODO: implement
    }

    function add(a, b) {
      return a + b;
    }

    const add10 = partial(add, 10);

    expect(add10(5)).toBe(15);
    expect(add10(20)).toBe(30);
  });
});

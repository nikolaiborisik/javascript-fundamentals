describe('Protype', () => {
  it('Function constructor', () => {
    function User(name) {}
    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello !== user2.sayHello).toBe(true);
  });

  it('Prototype', () => {
    function User(name) {}

    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello === user2.sayHello).toBe(true);
  });

  it('Create class ArticleList with 2 methods add and articleCount', () => {
    function ArticleList() {}

    const list1 = new ArticleList();
    const list2 = new ArticleList();
    list1.add('aaaa');
    list2.add('bbb');
    expect(list1.list.length).toBe(1);
  });

  it('Extend using prototype', () => {
    function Component() {}
    function UserComponent() {}

    const component1 = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component1.setData({
      name: 'Bob'
    });
    expect(component1.render()).toBe('');
    expect(component1.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should extend Child class from Parent ', () => {
    function extend(Child, Parent) {}
    function Component() {}
    function GreetingComponent() {}

    extend(GreetingComponent, Component);

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component1.setData({
      name: 'Bob'
    });
    expect(component1.render()).toBe('');
    expect(component1.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should use Class declaration for Component and UserComponent', () => {
    expect(false).toBe(true);
  });

  it('Should use Object.create for extending one object from another', () => {
    const greetings = {
      msg: 'Hello',
      name: 'guest',

      greetings: function() {
        return `${this.msg}, ${this.name}!`;
      }
    };

    let helloTom;
    let greetingsBob;

    expect(/* helloTom.greetings()*/).toBe('Hello, Tom!');
    expect(/* greetingsBob.greetings() */).toBe('Greetings, Bob!');
    expect(greetings.greetings()).toBe('Hello, guest!');
  });
});

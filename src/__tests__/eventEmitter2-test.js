// @flow
import EventEmitter from '../day5/EventEmitter2';

it('should add and execute listeners', () => {
  let emitter = new EventEmitter();
  let count = 0;

  emitter.addListener('user_login', () => {
    count += 1;
  });

  emitter.addListener('user_login', () => {
    count += 1;
  });

  emitter.emit('user_login');
  expect(count).toEqual(2);

  emitter.emit('user_login');
  expect(count).toEqual(4);
});

it('should do nothing for non-existant events', () => {
  let emitter = new EventEmitter();
  let count = 0;

  emitter.addListener('user_login', () => {
    count += 1;
  });

  emitter.emit('asdf');
  expect(count).toEqual(0);
});

it('should remove listener by reference', () => {
  let emitter = new EventEmitter();
  let count = 0;

  let userLoginHandler = () => {
    count += 1;
  };

  emitter.addListener('user_login', userLoginHandler);
  emitter.removeListener('user_login', userLoginHandler);

  emitter.emit('user_login');
  expect(count).toEqual(0);
});

it('should removeListenerByID', () => {
  let emitter = new EventEmitter();
  let count = 0;

  let id = emitter.addListener('user_login', () => {
    count += 1;
  });
  //   let id2 = emitter.addListener('click', () => {
  //     count += 1;
  //   });
  emitter.removeListenerByID(id.id);
  emitter.emit('user_login');
  expect(count).toBe(0);
  // expect(id.id).toEqual(emitter.removeListenerByID(1));
  //   expect(id.id).toEqual(1);
});

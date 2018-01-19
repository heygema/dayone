import EventEmitter from '../day5/eventEmitter';

it('should expect all good', () => {
  let event = new EventEmitter();

  event.addListener('click', () => console.log('clicked'));
  event.addListener('click', () => console.log('clicked again'));
  expect(event.listeners['click']).toHaveLength(2);
  event.addListener('hover', () => console.log('hover'));
  event.addListener('click', () => console.log('flash !'));
  expect(event.listeners['click']).toHaveLength(3);
});

const Component = require('../lib/circle.js');

describe('Circle', () => {
  test('should throw error if render() is called', () => {
    const component = new Component();
    const err = new Error('Must implement a render() method.')
    expect(component.render).toThrow(err);
  });
});
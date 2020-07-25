import test from 'tape';

import { incrementAsync } from './Saga/helloSaga'

test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next(),
    { done: false, value: '' },
    'incrementAsync should return a Promise that will resolve after 1 second'
  )
});
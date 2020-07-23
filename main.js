import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Counter from './Counter';
import User from './components/User';
import reducer, { userInfo } from './reducers';
import rootSaga  from './Saga/helloSaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(applyMiddleware(createSagaMiddleware(reducer)));
const userStore = createStore(userInfo, {});


const action = (type) => store.dispatch({ type });
const userAction = (type, payload) => userStore.dispatch({ type, payload });

function render() {
  const handleGetUserInfo = () => {
    const userInfo = { name: 'Wuuu', age: 26, hobby: 'play basketball' };
    userAction('GET_USER_INFO', userInfo);
  };
  const handleUpdateUserInfo = () => {
    const userInfo = { name: '詹姆斯-哈登', age: 30, hobby: 'NBA-player' };
    userAction('GET_USER_INFO', userInfo);
  };
  const handleReset = () => {
    userAction('REST_USER_INFO', {});
  };
  const counterProps = {
    value: store.getState(),
    onIncrement: () => action('INCREMENT'),
    onDecrement: () => action('DECREMENT'),
    onIncrementAsync: () => action('INCREMENT_ASYNC'),
  };

  const userProps = {
    userInfo: userStore.getState(),
    onReset: handleReset,
    onGetUserInfo: handleGetUserInfo,
    onUpdateUserInfo: handleUpdateUserInfo,
  };
  ReactDOM.render(
    <div>
      <Counter {...counterProps} />
      <User {...userProps} />
    </div>,
    document.getElementById('root'),
  );
}

render();
sagaMiddleware.run(rootSaga);
store.subscribe(render);
userStore.subscribe(render);

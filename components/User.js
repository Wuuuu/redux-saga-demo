import React, { Fragment } from 'react';

const User = ({ userInfo, onGetUserInfo, onUpdateUserInfo, onReset }) => {
  const { name, age, hobby } = userInfo || {};
  const handleGetUserInfo = () => {
    if (onGetUserInfo) onGetUserInfo();
  };
  const handleUpdateUserInfo = () => {
    if (onUpdateUserInfo) onUpdateUserInfo();
  };
  const handleReset = () => {
    if (onReset) onReset();
  };
  return (
    <div>
      {name ? (
        <div>
          <p>大家好: 我是{name}</p>
          <p>今年{age}岁了</p>
          <p>我的爱好是：{hobby}</p>
        </div>
      ) : (
        '暂无用户信息'
      )}
      <div>
        <button onClick={handleGetUserInfo}>获取用户信息</button>
        <button onClick={handleUpdateUserInfo}>更新用户信息</button>
        <button onClick={handleReset}>重置用户信息</button>
      </div>
    </div>
  );
};

export default User;

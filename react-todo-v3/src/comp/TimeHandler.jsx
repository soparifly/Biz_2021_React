import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
// 실시간 시간사용하기위한 useInterval
import { useInterval } from 'react-use';

const Clock = new Date(Date.now());


const TimeHandler = () => {
  const [NowTime, setNowTime] = useState();
  useInterval(() => {
    setNowTime(Clock);
  }, 1000);

  return <div>{NowTime}</div>;
};

export default TimeHandler;

import React from 'react';
import Wish from './Wish';

const Countdown = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <div>
        <h1 className='heading'>
          Geri sayım <span className='highlight'>{name} için</span> Doğum günü
        </h1>
        <div className='countdown-wrapper'>
          <div className='countdown-box'>
            {countdownData.days}
            <span className='legend'>Gün</span>
          </div>
          <div className='countdown-box'>
            {countdownData.hours}
            <span className='legend'>Saat</span>
          </div>
          <div className='countdown-box'>
            {countdownData.minutes}
            <span className='legend'>Dakika</span>
          </div>
          <div className='countdown-box'>
            {countdownData.seconds}
            <span className='legend'>Saniye</span>
          </div>
        </div>
      </div>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;

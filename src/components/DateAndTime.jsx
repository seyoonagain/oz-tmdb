import { useEffect, useState } from 'react';

function DateTimeDisplay() {
  const [currentDateAndTime, setCurrentDateAndTime] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const updateDateAndTime = () => {
      const date = new Date();
      const hour = date.getHours();
      const min = date.getMinutes();
      const second = date.getSeconds();

      const formattedTime = `${hour < 10 ? '0' + hour : hour}:${
        min < 10 ? '0' + min : min
      }`;

      const formattedDateAndTime = `${days[date.getDay()]} ${
        months[date.getMonth()]
      } ${date.getDate()}\xa0\xa0${formattedTime}:${
        second < 10 ? '0' + second : second
      }`;

      setCurrentDateAndTime(formattedDateAndTime);
      setCurrentTime(formattedTime);
    };

    updateDateAndTime();
    const clock = setInterval(updateDateAndTime, 1000);

    return () => clearInterval(clock);
  }, []);

  return (
    <div className='font-chicago text-xl'>
      <div className='hidden md:block'>{currentDateAndTime}</div>
      <div className='md:hidden'>{currentTime}</div>
    </div>
  );
}

export default DateTimeDisplay;

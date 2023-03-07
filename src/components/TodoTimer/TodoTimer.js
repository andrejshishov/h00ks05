import React, { useState, useEffect } from 'react';
import './TodoTimer.css';

export default function Timer({ fulltime, status }) {
    const [isExist, changeisExist] = useState(false);
    const [timer, setTimer] = useState(null);
    const [time, countTime] = useState(fulltime);

    const formatTime = (seconds) => [Math.floor((seconds / 60) % 60), Math.floor(seconds % 60)]
            .join(':')
            .replace(/\b(\d)\b/g, '0$1');

    const tick = () => {
        if (!isExist) return;
        if (status) {
            setTimer(clearInterval(timer));
        } else if (time === 0) {
            changeisExist(() => false);
            setTimer(clearInterval(timer));
        } else {
            countTime((t) => t - 1);
        }
    };

    useEffect(() => {
        const count = setInterval(() => tick(), 1000);
        return () => clearInterval(count);
    });

    const onStart = () => changeisExist(() => true);

    const onPause = () => changeisExist(() => false);

    return (
        <React.Fragment>
            <button
            className='icon icon-play'
            type='button'
            onClick={onStart}
        />
        <button
            className='icon icon-pause'
            type='button'
            onClick={onPause}
        />
        <span className = 'timeredit'>
            {formatTime(time)}
        </span>
       </React.Fragment>
    );
}
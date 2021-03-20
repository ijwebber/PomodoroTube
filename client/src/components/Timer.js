import React from 'react'
import { useState, useEffect } from 'react';

export default function Timer(props) {
    const {initialMinute = 0, initialSeconds = 0, callback} = props;
    console.log(props.initialMinute);
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] =  useState(initialSeconds);

    useEffect(() => {
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    callback()
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    useEffect(() => {
        setMinutes(props.initialMinute);
        setSeconds(props.initialSeconds);
    }, [props.initialMinute, props.initialSeconds])

    return (
        <div>
        { 
            <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}
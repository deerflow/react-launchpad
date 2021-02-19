import * as React from 'react';
import {useEffect, useState} from "react";

const Button = (
    { sound, keyMap }: { sound: string, keyMap: string }
    ) => {
    const [ power, setPower ] = useState(false);

    const key = 'Key' + keyMap.toUpperCase();
    const audio = new Audio(sound)

    const playSound = () => {
        setPower(true);
        if (audio.paused) {
            audio.play();
        } else {
            audio.cloneNode().play();
        }
    }

    const stopSound = () => {
        audio.pause();
        audio.currentTime = 0;
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
        console.log('Events for ' + sound + ' added')
    }, [])

    const onKeyDown = e => {
        if (e.code === key) playSound();
    }

    const onKeyUp = e => {
        if (e.code === key) setPower(false);
    }

    return <div
        className={power ? 'Button Button-yellow' : 'Button'}
        onMouseDown={playSound}
        onMouseUp={() => setPower(false)}
        onMouseLeave={() => setPower(false)}
    />
}

export default Button;
import * as React from 'react';
import Button from "./Button";

import kick from '../sounds/kick.wav';
import snareClosed from '../sounds/snare-closed.wav';
import snareOpen from '../sounds/snare-open.wav'
import hatClosed from '../sounds/hat-closed.wav';
import hatHalfOpen from '../sounds/hat-half-open.wav';
import hatOpen from '../sounds/hat-open.wav';

const sounds: { audio: string, key: string }[] = [
    { audio: kick, key: 'Q'},
    { audio: hatClosed, key: 'W' },
    { audio: snareClosed, key: 'E'},
    { audio: snareOpen, key: 'A' },
    { audio: hatHalfOpen, key: 'S' },
    { audio: hatOpen, key: 'D' }
]

const Launchpad = () => {
    return (
        <div className='Launchpad'>
            { sounds.map((sound: object, index: number) => <Button
                sound={sound.audio}
                keyMap={sound.key}
                key={index}/>) }
        </div>
    )
}

export default Launchpad
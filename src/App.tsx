import * as React from 'react';
import Launchpad from "./components/Launchpad";

const App = () => {
    return (
        <div className='wrapper'>
            <div>Controls: A, Z, E, Q, S, D (or click)</div>
            <Launchpad />
        </div>
    )
}

export default App;
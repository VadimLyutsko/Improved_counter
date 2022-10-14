import React, {useState} from 'react';
import styles from './App.module.css'
import {Tabloid} from './Components/Tabloid/Tabloid';
import {Settings} from './Components/Settings/Settings';

 const App: React.FC = () => {
     const [value, setValue]=useState(0)

    return (
        <div className={styles.App}>
            <Settings/>
            <Tabloid incNewValue={setValue} value={value}/>
        </div>
    );
};

 export default App;
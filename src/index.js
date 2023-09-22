import {createRoot} from 'react-dom/client';
import Headder from './headder.js';

import Body from './Body.js';
import './index.css';
const App = ()=>{
    // var a=new Image();
    // var b=new Image();
    // a.src=''
    // b.src=''
    // getbase64Ima


    return(
        <>
        <div className='overall' style={{zoom:'1.06',minHeight:'92.3vh',minWidth:'92.3vh'}} >
        <Headder />
        <Body/>

        </div>
        </>
    )

}
const container=document.getElementById('root')

const root=createRoot(container);
root.render(<App/>)

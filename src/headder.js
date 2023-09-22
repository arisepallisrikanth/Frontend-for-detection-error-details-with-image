import './index.css';
import data from './data.js';

export default function Headder(){
    console.log(data[0])
    return(
        <>
        <div className="navbar">
            
                <img  className='herologo' alt='logo' src='yourLogo.png'/>
            <span className='supapp'>Support App</span>
            <span className='delearspan'><span className='dealer key' >Dealer Login ID: </span><span className='dealer value'>DN001.90321</span></span>
        </div>
        </>
    )
}
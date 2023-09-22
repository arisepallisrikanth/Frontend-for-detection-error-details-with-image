import React from 'react';
import data from './data.js';


const Infosec = ({ele_prop}) => {
  console.log(ele_prop)
    const [n_click,set]=React.useState(1)
  function values_noOfClick(n_click){
// this function takes the n_click as arguement which tells first or second click
    return [data[0]["refresh_return"][n_click],n_click]
    // returns data according to n_clcik value
      }
     
const [rem_sec,set_remsec]=React.useState(['--','--'])
  function handle(){

    set(prev=>prev+1)
    console.log(n_click)
    console.log(values_noOfClick(n_click)[0])
    set_remsec(values_noOfClick(n_click)[0])
    // values_noOfClick takes n_click as arguement which tell nth ClickAwayListener(1st or 2nd click) and returns data corresponding to the n_clcik arguement
    // set_remsec() function takes data got from values_noOfClick() and places on the the page
    console.log(rem_sec)
    

    
    }
   
  
  
  
    
   
   


  console.log(ele_prop)

  return (
    <div className='infosec'>
        <div className='infonav'><span className='infomation'>Infomation</span></div>
        
        <div className='infobody'> 
        <div className='contfrtwodiv'>
        <div className='divenclstwosp leftcont'>

            <span className='headding'>Problem Statement</span>
            <span className='spandash'>{ele_prop.pb_st}</span>
            </div>

            <div className='divenclstwosp rightcont'>
            <span className='headding'>Customer MSISDN: </span>
            <span className=' msisd spandash'>{ele_prop.cust_ms}</span>
            </div>
        </div>
        <div className='contfrtwodiv'>
            <div className='divenclstwosp leftcont'>
        <span className='headding'>RCARD</span>
        <span className='spandash'>{ele_prop.rcard_no}</span>
        </div>
        <div className='divenclstwosp rightcont'>
         <span className='headding'>Reported Time</span>
        <span className='spandash'>{ele_prop.est_time}</span>
        </div>


        </div>
        <div className='curStRmrk'>
        <div className='curst'>
            <div className='resultin resultcontinStyle' style={{flexShrink: '1 0 0'}}>
                <div className='resultinhalf resultcontinStyle'>
        <span className='headding'>Current Status</span>
        {n_click>1?<li style={{width:'95px',height:'22px',color:n_click===3?'#40c706':'orange'}}><span style={{position:'relative',left:'-12px'}}>{rem_sec[0]}</span></li>:<span className='spandash'>{rem_sec[0]}</span>}

        </div>
        </div>

        </div>
        <div className='rmrk'>
    
            <div className='resultin resultcontinStyle' style={{flexShrink: '0'}}>
        <span className='headding'>Remarks</span>
        <div className='rmrkspandiv'>
        <span className='spandash rmk'>{rem_sec[1]}</span>
        </div>
        <div className='refdiv'>
          
        {(ele_prop.Isshow&&n_click<3)&&<button className='refbtn' onClick={handle} id='refresh_btn'><span className='roundarrow'>&#10227;</span><span className='refreshtxt'>Refresh</span></button>}
        {/* when this button clicked , handle () evokes */}
        </div>
        
        </div>

        </div>

        </div>
        </div>
    </div>
  )
}

export default Infosec
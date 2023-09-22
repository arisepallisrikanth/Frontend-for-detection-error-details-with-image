import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import data from './data.js';
// var path=require('path'); 


function Imgholder({handler}) {
  const inputref=React.useRef()
  const [state,setstate]=React.useState('imageholder.png')
  const[Isupadate,setupdate]=React.useState(false)
  // const contex=createContext()
  // const context=useContext(contex)
  function pbValuesreturn(pb_img) 
  
  // Functionality doc
    
  // :param img: blob
  // :return: object


  //pbValuesreturn takes pb_img which is blob type and returns values corresponding to that image like customer Msisdn, problem statement
  {
    data[0]["img_upld_return"]['appr_img']=pb_img
    // appending pb_img arguement to data which is going to be returned

    return (data[0]["img_upld_return"])
    // returning data
  }
  
  const imagechange=(event)=>{
    // this function takes the even which triggered when image uploaded
    console.log(event)
    setstate(null)
    // when image uploaded from local Storage, state set to null to show loading till image uploaded on screen
    console.log(event.target.files[0])
    const pb_img=URL.createObjectURL(event.target.files[0])
    // blob object for the image created from the arguemnet even
    
    setTimeout(() => {
     handler({...pbValuesreturn(pb_img),'Isshow':true})
    //  pbValuesreturn function evoked
    setstate(pbValuesreturn(pb_img)['appr_img'])
    // setting state to pb_img which got from data returned from pbValuesreturn() so image uploaded appear on screen

    setupdate(true)
      
    }, 1000);
    // timeout function to show loading is happening

  

    return 
    // const im=URL.createObjectURL(state.selectedfile)
}
function imbtnclick(){
  inputref.current.click()

}
  return (
    <>
    <div className='imgholder'>
      {/* <button  onClick={()=>props.handler(id)}>Props</button> */}
      <div className='imgplaced'>
        {state?<img src={state} alt='imageholder' className={state===`imageholder.png`?`improfile`:`actIm`}/>:
        <Backdrop className='imgplaced' style={{backgroundColor:'white',position:'absolute'}} sx={{ color: 'grey' }} open>
        <CircularProgress color="inherit" />
        </Backdrop>}
        
        

       
        
      </div>
      <input type="file" onChange={imagechange} style={{display:"none"}} ref={inputref}/>

      <button className='uploadbtn' onClick={imbtnclick}><span className='upldbtntxt'>{Isupadate?`Update `:`Upload `}Image</span></button>
      {/* when this button is clicked, it will go to 'imagechange()' function */}
    </div>
    
    </>
    
  )
}

export default Imgholder
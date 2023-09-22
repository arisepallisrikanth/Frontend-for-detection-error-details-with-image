import React from 'react';
import Imgholder from './imgholder';
import Infosec from './infosec';

const Body = () => {
  const [ele_prop,setele]=React.useState(
    {
      'pb_st':'--',
        'cust_ms':'--',
        'rcard_no':'--',
        'est_time':'--',
        'curr_st':['--'],
        'remarks':['--' ] ,
         'Ishow':false
    }
  )
console.log(ele_prop)  

  

  
  return (
    <>
        <div className='infbody'>
            <Imgholder handler={setele}/>
            <Infosec ele_prop={ele_prop}/>

        </div>

    </>
  )     
}
export default Body
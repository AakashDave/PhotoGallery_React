import React, { useState } from 'react'
import Gallery from './Gallery';
import Sdata from './Sdata';

export default function App() {
  let [data,setData]=useState(Sdata);
  
  let AllMenuShown=()=>{
    setData(Sdata);
  }
 
  let inputEvent=(event)=>{
    let name=event.target.name;

    let filteredData=Sdata.filter((value)=>{
      return value.category===name;
    })

    setData(filteredData);
    console.log(data);
  }

  return(
    <>
      <div className="container">
        <h3 className='text-center'>Order Your Favourite Dish</h3>
        <hr />
        <div className="d-flex justify-content-around w-50 m-auto">
          <button type="button" name='breakfast' onClick={inputEvent} class="btn btn-sm btn-warning">BreakFast</button>
          <button type="button" name='lunch' onClick={inputEvent} class="btn btn-sm btn-warning">Lunch</button>
          <button type="button" name='evening' onClick={inputEvent} class="btn btn-sm btn-warning">Evening</button>
          <button type="button" name='dinner' onClick={inputEvent} class="btn btn-sm btn-warning">Dinner</button>
          <button type="button" name='all' onClick={AllMenuShown} class="btn btn-sm btn-warning">All</button>
        </div>
        <Gallery menu={data}/>
      </div>

    </>
  )
}

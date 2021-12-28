import React from 'react';
import picture from '../pic.jpg';
const Park = () =>{
  return (
    <div>
      <h3>Park</h3>
      <img src={picture} alt="park" width={300} height={300}/>
    </div>
  );
}
export default Park;
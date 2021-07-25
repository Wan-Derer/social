import React from 'react';
import preloader from '../../../assets/images/loader.gif'

const Preloader = (props) => {
  return <div style={{background: 'transparent'}}>
    <img src={preloader} alt=''/>
  </div>
}

export default Preloader;




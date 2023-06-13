import React from 'react';
import { Tilt } from 'react-tilt'
import tech from './tech.png'; 
import './logo.css'

const defaultOptions = {
	perspective:    1000
}

const Logo =()=>{
    return(
        <div>
             <Tilt options={defaultOptions.perspective} style={{ height: 150, width: 150 }}>
      <div className = "ml3"><img src ={tech}  alt = "technology" /></div>
    </Tilt>

        </div>
    )
}

export default Logo
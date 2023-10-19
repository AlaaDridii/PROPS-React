import React from 'react'
import './aarticle.css'

const Aarticle = (props) => {
    console.log(props);
  return (
    <>
<div className='cards'>
    <h2>{props.title}</h2>
    <img src={props.imgsrc} alt='produit' />
    <p>{props.text}</p>
    <button>{props.btn}</button>
    <hr/>
</div>  
    </>
  )
}

export default Aarticle;

import React from 'react';
import './App.css';
import Aarticle from './components/Aarticle';
import AarticleData from './components/AarticleData';

const App = () => {
  return (
    <>
      <h1>Shop Products</h1>
      <div className='container flex'>
        {AarticleData.map((values)=>{
           return(
            <>
            <Aarticle
            title={values.title}
            imgsrc={values.imgsrc}
            text={values.text}
            btn={values.btn}
            />
            </>
            )
        })}
      </div>
    </>
  )
}

export default App;



import React from 'react'
import './Service.css';
import Card from './Card';
import data from './ServiceApi';

const Service = () => {
  return (
    <>
    <section className='service top' id='service'> 
        <div className='container'>
            <div className='heading'>
                <h1 className='text'>SERVICES</h1>
                <h3 className='text'>What I Do </h3>

            </div>
            <div className='content grid'>
                {
                    data.map((val,index) =>{
                        return <Card key={index} image={val.image} title = {val.title} desc = {val.desc}/>
                    })
                }
                
            </div>

        </div>


    </section>
    
    </>
  )
}

export default Service
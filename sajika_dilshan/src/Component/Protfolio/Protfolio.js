import React from 'react'
import "./Protfolio.css"
import Portfolio_data from './Protfolio_data'
import Card from './Card'

const Protfolio = () => {
  return (
    <>
    <section className='protfolio top' id='protfolio'>
        <div className='container'>
               <div className='heading text-center'>
                <h3>VISIT MY PROTFOLIO AND KEEP YOUR FEEDBACK</h3>
                <h1>My Protfolio</h1>

               </div>
               <div className='content grid'>
                {Portfolio_data.map((val ,index) =>{
                    return <Card key={index} image = {val.image} category = {val.category} totalLike ={val.totalLike} title ={val.title} desc = {val.desc} link = {val.link}/>
                })}
               </div>
        </div>

    </section>
    
    </>
  )
}

export default Protfolio
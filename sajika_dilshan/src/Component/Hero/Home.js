import React from 'react'
import "./Home.css"
import hero from "../Pic/hero.png"
import skill1 from "../Pic/skill1.png"
import skill2 from "../Pic/skill2.png"
import skill3 from "../Pic/skill3.png"
import { Typewriter  } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>

      <section className='hero' id='home'>
          <div className='container f_flex top' >
            <div className='left top'>
                 <h3>WELCOME TO MY WORLD</h3>
                 <h1>Hi , I'm <span>Sajika Dilshan</span></h1>
                 <h2>  a  
                   <span>
                 <Typewriter words={[' Developer.', ' UI/UX Designer.', ' Undergraduate.']} loop cursor cursorStyle='|' typeSpeed={70}  deleteSpeed={50}  delaySpeed={1000} />
                 </span>
                 </h2>
                 <p>I am an enthusiastic undergraduate who is passionate about web development and software engineering. I am eager to leverage my skills in to build user-friendly and interactive web applications. As an individual who is keen on learning from practice, I have already given my contribution to multiple projects. I'm a fast learner and a team player, always looking for opportunities to contribute to challenging projects and expand my knowledge in this ever-evolving field.</p>
                 <div className='hero_btn d_flex'>
                    <div className='col_1'>
                        <h4>FIND WITH ME</h4>
                        <div className='button'>
                            <button className='btn_shadow' >
                              <a href='https://www.facebook.com/sajika.dilshan.1?mibextid=LQQJ4d'><i className='fab fa-facebook-f'></i></a>
                              
                            </button>
                            <button className='btn_shadow'>
                            <a href='https://www.instagram.com/'> <i className='fab fa-instagram'></i></a>
                            </button>
                            <button className='btn_shadow'>
                            <a href='https://www.linkedin.com/in/sajika-dilshan-489a8a227/'>  <i className='fab fa-linkedin-in'></i></a>
                            </button>
                        </div>
                    </div>
                    <div className='col_1'>
                        <h4>BEST SKILL ON</h4>
                        <button className='btn_shadow'>
                                <img src={skill1} alt='skill1'/>
                        </button>
                        <button className='btn_shadow'>
                                <img src={skill2} alt='skill2'/>
                        </button>
                        <button className='btn_shadow'>
                                <img src={skill3} alt='skill3'/>
                        </button>
                    </div>

                 </div>
            </div>
            <div className='right'>
                <div className='right_img'>
                    <img src={hero} alt='hreo'/>
                </div>
            </div>

          </div>

      </section>
    </>
  )
}

export default Home
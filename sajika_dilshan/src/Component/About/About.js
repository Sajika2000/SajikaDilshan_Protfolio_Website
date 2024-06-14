import React, { useState } from 'react';
import './About.css';
import about_img from '../Pic/about.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const opentab = (tabname, event) => {
    setActiveTab(tabname);
  };

  return (
    <>
      <div className="about">
        <div className="div-container">
          <div className="about-row">
            <div className="about-col-1 left_img">
              <img src={about_img} alt="" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                I am an enthusiastic undergraduate who is passionate about web development and software engineering. I am eager to leverage my skills in to build user-friendly and interactive web applications. As an individual who is keen on learning from practice, I have already given my contribution to multiple projects. I'm a fast learner and a team player.
              </p>
              <div className="tab-titles">
                <p
                  className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                  onClick={(event) => opentab('skills', event)}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                  onClick={(event) => opentab('experience', event)}
                >
                  Experience
                </p>
                <p
                  className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                  onClick={(event) => opentab('education', event)}
                >
                  Education
                </p>
              </div>
              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                <ul>
                  <li><span>UI/UX</span><br /> Designing Web/App interface</li>
                  <li><span>Web Development</span><br /> Web app development</li>
                  <li><span>App development</span><br /> Building Android/ios apps</li>
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                <ul>
                  <li><span>2020-2021</span><br /> Internship Training at Peoples Bank </li>
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                <ul>
                  <li><span>2021-Current</span><br /> Bsc(Hons) Computing & Information System, SUSL</li>
                  <li><span>2017-2019</span><br /> G.C.E A/L(Physical Science), St Aloysius Collage</li>
                  <li><span>2011-2016</span><br /> G.C.E O/L, Niyagama Vijitha Central Collage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React, { useState } from 'react';
import './department.css'
import Events from '../events/events'


export default function Department() {
  const [activeSection, setActiveSection] = useState('ai');

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };
  const departments = {
  cse: [
    {
      src: './assets_new/cse/animequiz.jpg',
      title: 'Anime Quiz',
      filename: '',
      filelink: "",
      id:"1",
      reglink:"https://reg.yvidh.live/dept_event/cse/anime_quiz/"
    },
    {
      src: './assets_new/cse/debugging.jpg',
      title: 'Debugging',
      filename: '',
      filelink: "" ,
      id:"2",
      reglink:"https://reg.yvidh.live/dept_event/cse/debugging/"    },
    {
      src: './assets_new/cse/fusion360jpg.jpg',
      title: 'Fusion 360',
      filename: '',
      filelink: "" ,
      id:"3",
      reglink:"https://reg.yvidh.live/dept_event/cse/fusion_360_workshop/"    },
    {
      src: './assets_new/cse/scrambledkey.jpg',
      title: 'Scrambled Keyboard',
      filename: '',
      filelink: "" ,
      id:"4",
      reglink:"https://reg.yvidh.live/dept_event/cse/scrambled_keyboard/"    },
    {
      src: './assets_new/cse/hackathon.jpg',
      title: 'Hackathon',
      filename: '',
      filelink: "" ,
      id:"5",
      reglink:"https://reg.yvidh.live/dept_event/cse/hackathon/"    },
    {
      src: './assets_new/cse/cyber.jpg',
      title: 'Cyber Security Workshop',
      filename: '',
      filelink: "" ,
      id:"6",
      reglink:"https://reg.yvidh.live/dept_event/cse/cyber_security_workshop/"    },
    {
      src: './assets_new/cse/goalstrom.jpg',
      title: 'Goal Strom (PES)',
      filename: '',
      filelink: "" ,
      id:"7",
      reglink:"https://reg.yvidh.live/dept_event/cse/goal_storm/"    },
    {
      src: './assets_new/cse/hyperlink.jpg',
      title: 'Hyperlink',
      filename: '',
      filelink: "" ,
      id:"8",
      reglink:"https://reg.yvidh.live/dept_event/cse/hyperlink/"    },
    {
      src: './assets_new/cse/valorant.jpg',
      title: 'Valorant',
      filename: '',
      filelink: "" ,
      id:"9",
      reglink:"https://reg.yvidh.live/dept_event/cse/vanguard_arena/"    },
    {
      src: './assets_new/cse/VR.jpg',
      title: 'VR Expo',
      filename: '',
      filelink: "" ,
      id:"10",
      reglink:""    },
  ],
 ai: [
    {
      src: './assets_new/ai/webdev.jpg',
      title: 'Website Development',
      filename: '',
      filelink: "" ,
      id:"11",
      reglink:"https://reg.yvidh.live/dept_event/ai/web_development/"    },
    {
      src: './assets_new/ai/capturetheflag.jpg',
      title: 'Capture The Flag',
      filename: '',
      filelink: "" ,
      id:"12",
      reglink:"https://reg.yvidh.live/dept_event/ai/capture_the_flag/"    },
    {
      src: './assets_new/ai/prompt.jpg',
      title: 'Prompt Literaria',
      filename: '',
      filelink: "" ,
      id:"13",
      reglink:"https://reg.yvidh.live/dept_event/ai/prompt_literaria/"    },
  ],
  ece: [
    {
      src: './assets_new/ec/BGMI.jpg',
      title: 'BGMI',
      filename: '',
      filelink: "" ,
      id:"14",
      reglink:"https://reg.yvidh.live/dept_event/ece/bgmi_tournament/"    },
    {
      src: './assets_new/ec/circutquest.jpg',
      title: 'Circut Quest',
      filename: '',
      filelink: "" ,
      id:"15",
      reglink:"https://reg.yvidh.live/dept_event/ece/circuit_quest/"    },
    {
      src: './assets_new/ec/electrorumble.jpg',
      title: 'Electro Rumble',
      filename: '',
      filelink: "" ,
      id:"16",
      reglink:"https://reg.yvidh.live/dept_event/ece/electro_rumble/"    },
    {
      src: './assets_new/ec/rc.jpg',
      title: 'RC Evolution',
      filename: '',
      filelink: "" ,
      id:"17",
      reglink:""    },
    {
      src: './assets_new/ec/robosoccer.jpg',
      title: 'Robo Soccer',
      filename: '',
      filelink: "" ,
      id:"18",
      reglink:"https://reg.yvidh.live/dept_event/ece/robo_soccer/"    },
    {
      src: './assets_new/ec/quiz.jpg',
      title: 'Technical Quiz',
      filename: '',
      filelink: "" ,
      id:"19",
      reglink:"https://reg.yvidh.live/dept_event/ece/technical_quiz/"    },
    
  ],
  mech: [
    {
      src: './assets_new/mech/engineassembly.jpg',
      title: 'Engine Assembly',
      filename: '',
      filelink: "" ,
      id:"20",
      reglink:"https://reg.yvidh.live/dept_event/mech/engine_assembly/"
    },
    {
      src: './assets_new/mech/lathemaster.jpg',
      title: 'Lathe Master',
      filename: '',
      filelink: "" ,
      id:"21",
      reglink:"https://reg.yvidh.live/dept_event/mech/lathe_master/"
    },
    {
      src: './assets_new/mech/reversecad.jpg',
      title: 'Reverse Engineering Cad',
      filename: '',
      filelink: "" ,
      id:"22",
      reglink:"https://reg.yvidh.live/dept_event/mech/reverse_engineering_cad/"
    },
    {
      src: './assets_new/mech/slowrace.jpg',
      title: 'Slow Race',
      filename: '',
      filelink: "" ,
      id:"23",
      reglink:"https://reg.yvidh.live/dept_event/mech/solo_race/"
    },
    
  ],
 civil: [
    {
      src: './assets_new/civil/caddster.jpg',
      title: 'Caddster',
      filename: '',
      filelink: "" ,
      id:"24",
      reglink:"https://reg.yvidh.live/dept_event/civil/caddster/"
    },
    {
      src: './assets_new/civil/civilexpo.jpg',
      title: 'Civil Expo',
      filename: '',
      filelink: "" ,
      id:"25",
      reglink:""
    },
    {
      src: './assets_new/civil/craftycut.jpg',
      title: 'Crafty Cut',
      filename: '',
      filelink: "" ,
      id:"26",
      reglink:"https://reg.yvidh.live/dept_event/civil/crafty_cut/"
    },
    {
      src: './assets_new/civil/setupmold.jpg',
      title: 'Setup the Mould',
      filename: '',
      filelink: "" ,
      id:"27",
      reglink:"https://reg.yvidh.live/dept_event/civil/setup_the_mould/"
    },
  ],
eee: [
    {
      src: './assets_new/eee/mindmasters.jpg',
      title: 'Mind Master',
      filename: '',
      filelink: "" ,
      id:"28",
      reglink:"https://reg.yvidh.live/dept_event/eee/mind_masters/"
    },
    {
      src: './assets_new/eee/rcrevolution.jpg',
      title: 'Rc Revolution',
      filename: '',
      filelink: "" ,
      id:"29",
      reglink:""
    },
    {
      src: './assets_new/eee/voltvaluthunt.jpg',
      title: 'Volt Vault Hunt',
      filename: '',
      filelink: "" ,
      id:"30",
      reglink:"https://reg.yvidh.live/dept_event/eee/volt_vault_hunt/"
    },
  ],
  agri: [
    {
      src: './assets_new/agri/augerdrilling.jpg',
      title: 'Auger Drilling',
      filename: '',
      filelink: "" ,
      id:"31",
      reglink:"https://reg.yvidh.live/dept_event/agri/auger_drilling/"
    },
    {
      src: './assets_new/agri/avengers assemble.jpg',
      title: 'Avengers Assemble',
      filename: '',
      filelink: "" ,
      id:"32",
      reglink:"https://reg.yvidh.live/dept_event/agri/avengers_assemble/"
    },
    {
      src: './assets_new/agri/tractorparking.jpg',
      title: 'Tractor Parking',
      filename: '',
      filelink: "" ,
      id:"33",
      reglink:"https://reg.yvidh.live/dept_event/agri/tractor_parking/"
    },

  ]
}
  return (
    <div className='depmaincont'>
      <div className='deplist'>
        <div className="depnav">
          <div className={`depname ${activeSection === 'ai' ? 'active' : ''}`} onClick={() => handleSectionClick('ai')}>
            <a href="#ai">AI/ML</a>
          </div>
          <div className={`depname ${activeSection === 'mech' ? 'active' : ''}`} onClick={() => handleSectionClick('mech')}>
            <a href="#mech">MECH</a>
          </div>
          <div className={`depname ${activeSection === 'civil' ? 'active' : ''}`} onClick={() => handleSectionClick('civil')}>
            <a href="#civil">CIVIL</a>
          </div>
          <div className={`depname ${activeSection === 'agri' ? 'active' : ''}`} onClick={() => handleSectionClick('agri')}>
            <a href="#agri">AGRI</a>
          </div>
          <div className={`depname ${activeSection === 'ece' ? 'active' : ''}`} onClick={() => handleSectionClick('ece')}>
            <a href="#ece">ECE</a>
          </div>
          <div className={`depname ${activeSection === 'eee' ? 'active' : ''}`} onClick={() => handleSectionClick('eee')}>
            <a href="#eee">EEE</a>
          </div>
          <div className={`depname ${activeSection === 'cse' ? 'active' : ''}`} onClick={() => handleSectionClick('cse')}>
            <a href="#cse">CSE</a>
          </div>
        </div>
      </div>
      <div className='depevent'>
        {Object.keys(departments).map((deptKey) => (
          <section className="eventsec" id={deptKey} key={deptKey} style={{ display: activeSection === deptKey ? 'block' : 'none' }}>
            <Events dept={departments[deptKey]} />
          </section>
        ))}
      </div>
    </div>
  )
}

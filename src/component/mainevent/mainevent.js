import React from 'react'
import Events from '../events/events'


export default function Mainevent() {
    const mainevent = [
        {
            src: './assets_new/main_events/BATTLE OF BEATS.jpg',
            title: 'Battle of Beats',
            filename: '',
            filelink:"",
            id:"33",
            reglink:"http://reg.yvidh.live/battle_of_beats/"
          },
          {
            src: './assets_new/main_events/voice of yvidh.jpg',
            title: 'Voice Of Yvidh',
            filename: '',
            filelink:"",
            id:"34",
            reglink:"https://forms.gle/A4VxtTC3G2qNJTqt6"
          },
          {
            src: './assets_new/main_events/CHOREONITE.jpg',
            title: 'CHOREONITE',
            filename: '',
            filelink:"",
            id:"35",
            reglink:"http://reg.yvidh.live/choreonite/"
          },
          {
            src: './assets_new/main_events/MUSCLE WAR.jpg',
            title: 'Man Of Steel',
            filename: '',
            filelink:"",
            id:"36",
            reglink:"http://reg.yvidh.live/man_of_steel/"
          },
          {
            src: './assets_new/main_events/solo sizzle.jpg',
            title: 'Solo Sizzle',
            filename: '',
            filelink:"",
            id:"37",
            reglink:"https://forms.gle/XzEAg9heegorschd8"
          },
          {
            src: './assets_new/main_events/REEL FEST.jpg',
            title: 'Reel Fest',
            filename: '',
            filelink:"",
            id:"38",
            reglink:"http://reg.yvidh.live/reel_fest/"
          },
    ]
  return (
    <div className='depmaincont specialcont'>
        <div className='depevent'>
        <section className="eventsec">
            <Events dept={mainevent} />
          </section>
    </div>
    </div>

  )
}

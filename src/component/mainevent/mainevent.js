import React from 'react'
import Events from '../events/events'


export default function Mainevent() {
    const mainevent = [
        {
            src: './assets_new/main_events/BATTLE OF BEATS.jpg',
            title: 'Battle of Beats',
            filename: '',
            filelink:"",
            id:"34",
            reglink:"https://docs.google.com/forms/d/e/1FAIpQLSfEhUuP4aeBDdBxqlsjVw_hMpCCWSYG1wWTmKbyYtpqcc7-NA/viewform?usp=header"
          },
          {
            src: './assets_new/main_events/voice of yvidh.jpg',
            title: 'Voice Of Yvidh',
            filename: '',
            filelink:"",
            id:"35",
            reglink:"https://docs.google.com/forms/d/e/1FAIpQLSfEhUuP4aeBDdBxqlsjVw_hMpCCWSYG1wWTmKbyYtpqcc7-NA/viewform?usp=header"
          },
          {
            src: './assets_new/main_events/CHOREONITE.jpg',
            title: 'CHOREONITE',
            filename: '',
            filelink:"",
            id:"36",
            reglink:"https://docs.google.com/forms/d/e/1FAIpQLSfEhUuP4aeBDdBxqlsjVw_hMpCCWSYG1wWTmKbyYtpqcc7-NA/viewform?usp=header"
          },
          {
            src: './assets_new/main_events/MUSCLE WAR.jpg',
            title: 'Man Of Steel',
            filename: '',
            filelink:"",
            id:"37",
            reglink:"https://docs.google.com/forms/d/e/1FAIpQLSfEhUuP4aeBDdBxqlsjVw_hMpCCWSYG1wWTmKbyYtpqcc7-NA/viewform?usp=header"
          },
          {
            src: './assets_new/main_events/solo sizzle.jpg',
            title: 'Solo Sizzle',
            filename: '',
            filelink:"",
            id:"38",
            reglink:"https://docs.google.com/forms/d/e/1FAIpQLSfEhUuP4aeBDdBxqlsjVw_hMpCCWSYG1wWTmKbyYtpqcc7-NA/viewform?usp=header"
          },
          {
            src: './assets_new/main_events/REEL FEST.jpg',
            title: 'Reel Fest',
            filename: '',
            filelink:"",
            id:"39",
            reglink:"https://docs.google.com/forms/d/e/1FAIpQLSfEhUuP4aeBDdBxqlsjVw_hMpCCWSYG1wWTmKbyYtpqcc7-NA/viewform?usp=header"
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

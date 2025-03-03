import React from 'react'
import Events from '../events/events'


export default function Special() {
    const special = [
        {
            src: './assets_new/special/autoshow.jpg',
            title: 'AUTOSHOW',
            description: `🚗🏁AUTO SHOW!!!🏁🚗\n
            Get reved up for the Autoshow ! It's the ultimate auto show where you'll see the coolest cars and latest tech in action.\nFrom sleek designs to mind-blowing innovations, get ready for an adrenaline rush like no other! Don't miss out on the excitement – join us at YVIDH 2025 for an unforgettable moment!\n
            📌Venue-St. Thomas College of Engineering & Technology \n
            📌Date-March 7th\n
            📌website - www.yvidh.live\n
            Coordinators\n
            FAIZAL : 7994492431\n
            SIDHARTH : 8848866945\n
            ARSHIN : 8921327756`,
            filename: '',
            id:"50",
            reglink: ''
          },
          {
            src: './assets_new/special/VINTAGE.jpg',
            title: 'VINTAGE M0TO',
            description:` VINTAGE MOTO !!!\n
            A vintage moto show at a college fest will feature iconic vehicles like the RX100, Jawa, Chetak etc... showcasing their timeless design and history. With bike demos, restoration, workshops, and a competitive display, it would celebrate these classic machines and their unique charm..\n
            📌Venue-St. Thomas College of Engineering & Technology\n
            📌Date-March 7th\n
            📌website - www.yvidh.live\n
            Coordinators\n
            BEN : 7994950410\n
            ABHIJITH : 9074936482\n
            AFEEF : 8075402941`,
            filename: '',
            id:"51",
            reglink:''
          },

    ]
  return (
    <div className='depmaincont specialcont'>
        <div className='depevent'>
        <section className="eventsec">
            <Events dept={special} />
          </section>
    </div>
    </div>

  )
}

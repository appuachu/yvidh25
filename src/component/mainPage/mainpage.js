import React, { useState, useEffect } from 'react';
import './mainpage.css';
import Name from '../name/name';
import Date from '../date/date';

export default function Mainpage() {
    const [mediaSrc, setMediaSrc] = useState('./assets/home/homebackground.jpg');
    const [isVideo, setIsVideo] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1068) {
                setMediaSrc('./assets_new/phone/bs_index.mp4');
                setIsVideo(true);
            } else {
                setMediaSrc('./assets_new/index.mp4'); // Change this to your video
                setIsVideo(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='mainpagecontainer'>
            <div className='mainpgcontainerinner'>
                <div className="MainParallax">
                    {isVideo ? (
                        <video autoPlay loop muted className="background-video">
                            <source src={mediaSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={mediaSrc} alt="Background" className="background-image" />
                    )}
                </div>
                <div className='bhdg_hds'>
                    <div className="namey2">
                        <img src="./assets/Untitled-1.png" alt="Logo" />
                    </div>

                </div>
            </div>
        </div>
    );
}

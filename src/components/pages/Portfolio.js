import React from 'react';
import Project from '../Project';
import noteTakerImg from '../assets/noteTaker.png';
import thirdStImg from '../assets/3rdStreetInn.png';

const urls = ['https://github.com/jacksonnorris/bc-note-taker', 'https://3rdstreetinn.com/'];
const names = ['Note Taking App', 'Shopify Site'];
const ids = ['noteTaker', '3stInn'];
const srcs = [noteTakerImg, thirdStImg];

export default function Portfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div className="contentWrapper">
        <Project url={urls[0]} name={names[0]} id={ids[0]} src={srcs[0]} />
        <Project url={urls[1]} name={names[1]} id={ids[1]} src={srcs[1]} />
      </div>
    </div>
  );
}

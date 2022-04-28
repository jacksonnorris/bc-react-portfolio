import React from 'react';
import Project from '../Project';

const urls = ['https://github.com/jacksonnorris/bc-note-taker', 'https://3rdstreetinn.com/'];
const names = ['Note Taking App', 'Shopify Site'];
const ids = ['noteTaker', '3stInn'];
const srcs = ['./assets/noteTaker.png', './assets/3rdStreetInn.png']

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <Project url={urls[0]} name={names[0]} id={ids[0]} src={srcs[0]} />
      <Project url={urls[1]} name={names[1]} id={ids[1]} src={srcs[1]} />
    </div>
  );
}

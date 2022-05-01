import React from 'react';
import Project from '../Project';
import noteTakerImg from '../assets/noteTaker.png';
import thirdStImg from '../assets/3rdStreetInn.png';
import cryptoImg from '../assets/cryptoViewer.png';
import carImg from '../assets/car-quiz.png';

const urls = ['https://github.com/jacksonnorris/bc-crypto-viewer', 'https://github.com/jacksonnorris/bc-note-taker', 'https://github.com/jacksonnorris/bc-quiz-app', 'https://3rdstreetinn.com/'];
const names = ['Crypto Price Viewer', 'Note Taking App', 'Javascript Car Quiz', 'Shopify Site'];
const ids = ['cryptoViewer', 'noteTaker', 'carQuiz', '3stInn'];
const srcs = [cryptoImg, noteTakerImg, carImg, thirdStImg];

export default function Portfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <section>
        <div className="contentWrapper">
          <Project url={urls[0]} name={names[0]} id={ids[0]} src={srcs[0]} />
          <Project url={urls[1]} name={names[1]} id={ids[1]} src={srcs[1]} />
          <Project url={urls[2]} name={names[2]} id={ids[2]} src={srcs[2]} />
          <Project url={urls[3]} name={names[3]} id={ids[3]} src={srcs[3]} />
        </div>
      </section>
    </div>
  );
}

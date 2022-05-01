import React from 'react';
import Project from '../Project';
import noteTakerImg from '../assets/noteTaker.png';
import thirdStImg from '../assets/3rdStreetInn.png';
import cryptoImg from '../assets/cryptoViewer.png';
import carImg from '../assets/car-quiz.png';
import housableImg from '../assets/housable.png';
import diyImg from '../assets/diyProStudios.png'

const urls = ['https://github.com/devonfaria/housable', 'https://github.com/jacksonnorris/bc-crypto-viewer', 'https://github.com/jacksonnorris/bc-note-taker', 'https://github.com/jacksonnorris/bc-quiz-app', 'https://3rdstreetinn.com/', 'https://www.diyprostudios.com/'];
const names = ['House Sitting Service', 'Crypto Price Viewer', 'Note Taking App', 'Javascript Car Quiz', 'Shopify Site', 'Wordpress Site'];
const ids = ['housable', 'cryptoViewer', 'noteTaker', 'carQuiz', '3stInn', 'diy'];
const srcs = [housableImg, cryptoImg, noteTakerImg, carImg, thirdStImg, diyImg];

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
          <Project url={urls[4]} name={names[4]} id={ids[4]} src={srcs[4]} />
          <Project url={urls[5]} name={names[5]} id={ids[5]} src={srcs[5]} />
        </div>
      </section>
    </div>
  );
}

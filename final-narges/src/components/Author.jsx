import './Author.css';
import { Button } from 'antd';

import Navbar from './Navbar';

function Authore() {

  return (
    
    <div className="author-container">
      <Navbar/>
      <div className="sara">
        <h2>Sarah J. Maas: A Shining Star in Modern Fantasy Literature</h2>
        <p>
        Sarah J. Maas is one of the most prominent American authors in the young adult and adult fantasy genres. With her richly imagined worlds, unforgettable characters, and stories filled with adventure, romance, and inner and outer battles, she has captivated readers around the globe.
        </p>
        
        <h3>Short Biography</h3>
        <p>
        Sarah was born on March 5, 1986, in New York. She had a passion for storytelling from a young age and started writing fantasy stories early on. She studied Creative Writing and Religious Studies at Hamilton College.

        </p>
      
        <h3>Writing Style</h3>
        <p>Maas is known for her vivid descriptions, expansive world-building, surprising plot twists, and strong female leads. Her stories often explore themes such as power, sacrifice, love, liberation, and inner transformation.</p>
       
      </div>
    </div>
  );
}

export default Authore;
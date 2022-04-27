import logo from './logo.svg';
import './App.css';

import { useState } from 'react'
import NextPage from './nextPage';

function App() {

  const [next, setNext] = useState(false);
  const [language, setLanguage] = useState(false)

  const handleAppClick = () => {
    let changes = ['contrast', 'fontSize', 'language', 'invert']
    let colors = ['pink', 'green', 'yellow', 'blue', 'orange', 'brown', 'purple', 'black', 'white']
    let changePick = Math.floor(Math.random() * changes.length)

    if (changes[changePick] === 'contrast') {
      document.querySelector('html').style.filter = 'contrast(' + Math.random() * 300 + '%)'
    }
    if (changes[changePick] === 'fontSize') {
      document.querySelectorAll('p').forEach(x => x.style.fontSize = Math.random() * 5 + 'rem')

      document.querySelectorAll('h1').forEach(x => x.style.fontSize = Math.random() * 5 + 'rem')
      document.querySelectorAll('h2').forEach(x => x.style.fontSize = Math.random() * 5 + 'rem')
      document.querySelectorAll('h3').forEach(x => x.style.fontSize = Math.random() * 5 + 'rem')
      let menuDivs = document.querySelectorAll('#menu div')
      menuDivs.forEach(div => div.style.fontSize = Math.random() * 5 + 'rem')
      let buttons = document.querySelectorAll('button')
      buttons.forEach(button => button.style.transform = 'scale(' + Math.random() * 10 + ')')
      buttons.forEach(button => button.style.color = colors[Math.floor(Math.random() * colors.length)])
    }

    if (changes[changePick] === 'language') {
      setLanguage(!language)
    }

    if (changes[changePick] === 'invert') {
      document.querySelector('.App-header').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      document.querySelector('html').style.filter = 'hue(' + Math.random() * 360 + 'deg)';
      var all = document.getElementsByTagName("*");

      for (var i = 0, max = all.length; i < max; i++) {
        all[i].style.color = colors[Math.floor(Math.random() * colors.length)];
      }


    }
  }
  return (
    <div onClick={handleAppClick} className="App">
      <header className="App-header">
        <h1>{language ? 'The Most Accessible Website Ever!' : 'Le site Web le plus accessible de tous les temps !'}</h1>
        {!next ?
          <div>
            <div>
              <h2>
                {language ? 'Sarcina:' : 'The Task:'}
              </h2>
              <p>
                {language ? 'Do away with all of the normal time consuming dev work surrounding accessibility!' : 'Καταργήστε όλη την κανονική χρονοβόρα εργασία των προγραμματιστών γύρω από την προσβασιμότητα!'}
              </p>
            </div>
            <div>
              <h3>
                {language ? 'But how?!' : 'Ama nasıl?!'}
              </h3>
              <p>
                {language ? 'Versorgen Sie alle mit einem Klick auf eine beliebige Schaltfläche!' : 'Cater for everyone at the click of any button!'}
              </p>
            </div>
            <button onClick={() => setNext(true)} style={{ padding: '1rem 3rem', fontWeight: '700' }}>
              NEXT
            </button>
          </div>
          :
          <NextPage language={language} />
        }
      </header>
    </div>
  );
}

export default App;

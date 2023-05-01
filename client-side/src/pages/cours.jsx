import React from 'react'
import cours_1 from '../assets/images/cours1.png';
import cours_2 from '../assets/images/cours2.png';
import cours_3 from '../assets/images/cours3.png';
import cours_4 from '../assets/images/cours4.png';
import cours_5 from '../assets/images/cours5.png';
import cours_6 from '../assets/images/cours6.png';
import Footer from '../layouts/Footer';
import '../assets/css/cours.css'
import Header from '../layouts/Header';



function Cours() {

  const cours1 = [
    { image: cours_1, nomcour: 'math', description: 'Étudié par notre meilleur prof Mohammed' },
    { image: cours_2, nomcour: 'philosophies ', description: 'Étudié par notre meilleur prof Mohammed' },
    { image: cours_3, nomcour: 'Physique', description: 'Étudié par notre meilleur prof Mohammed' }
  ]
  const cours2 = [
    { image: cours_4, nomcour: 'English', description: 'Étudié par notre meilleur prof Mohammed' },
    { image: cours_5, nomcour: 'Svt', description: 'Étudié par notre meilleur prof Mohammed' },
    { image: cours_6, nomcour: 'Français', description: 'Étudié par notre meilleur prof Mohammed' }
  ]

  return (
    <>
    <Header/>
      <div>
        <input className='searchcours' type='search' placeholder='Nom du cours' />
        <div className='courses'>
        <ul>
          <li>Cours</li>
          <li>Math(biof)</li>
          <li>Physique</li>
          <li>Anglais</li>
          <li>Svt</li>
          <li>Philosophie</li>
          <li>Français</li>
        </ul>
        </div>
        <div className='cours1'>
          {
            cours1.map((item) => {
              return <div className='border_cours'>
                <img className='img_cours' src={item.image} />
                <h1>{item.nomcour}</h1>
                <p>{item.description}</p>
              </div>
            })
          }

        </div>
        <div className='cours2'>
          {
            cours2.map((item) => {
              return <div className='border_cours'>
                <img className='img_cours' src={item.image} />
                <h1>{item.nomcour}</h1>
                <p className='decription_cours'>{item.description}</p>
              </div>
            })
          }

        </div>
            <Footer/>
      </div>
    </>
  );
}

export default Cours
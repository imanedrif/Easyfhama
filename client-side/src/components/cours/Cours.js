import React, { useEffect,  useState } from "react";
import './cours.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import courF from '../../assets/images/courF.jpg';
import courE from '../../assets/images/courE.jpg';
import courM from '../../assets/images/courM.jpg';
import courP from '../../assets/images/courP.jpg';
import courS from '../../assets/images/courS.jpg';


function Cours() {

    const [selectedButton, setSelectedButton] = useState('matiére Primer');
    const [sliderContent, setSliderContent] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 500,
        cssEase: "linear"
    };

    const infocour = [
        { image: courF, name: 'Francais', title: 'cour francais pour les etudient de lycée' },
        { image: courE, name: 'Englais', title: 'cour englais pour les etudient de lycée' },
        { image: courM, name: 'Math', title: 'cour math pour les etudient de lycée' },
        { image: courP, name: 'Physique', title: 'cour physique pour les etudient de lycée' },
        { image: courS, name: 'Svt', title: 'cour svt pour les etudient de lycée' }
    ]
    const infocour2 = [
        { image: courS, name: 'Svt', title: 'cour svt pour les etudient de lycée' },
        { image: courP, name: 'Physique', title: 'cour physique pour les etudient de lycée' },
        { image: courM, name: 'Math', title: 'cour math pour les etudient de lycée' },
        { image: courE, name: 'Englais', title: 'cour englais pour les etudient de lycée' },
        { image: courF, name: 'Francais', title: 'cour francais pour les etudient de lycée' }
    ]
    const infocour3 = [
        { image: courM, name: 'Math', title: 'cour math pour les etudient de lycée' },
        { image: courE, name: 'Englais', title: 'cour englais pour les etudient de lycée' },
        { image: courS, name: 'Svt', title: 'cour svt pour les etudient de lycée' },
        { image: courF, name: 'Francais', title: 'cour francais pour les etudient de lycée' },
        { image: courP, name: 'Physique', title: 'cour physique pour les etudient de lycée' }
    ]

    useEffect(() => {
        if (selectedButton === 'matiére Primer') {
            setSliderContent([
                infocour.map((item) => {
                    return <div className='slide'>
                        <img className='img_cours' src={item.image} />
                        <h1 className='titre_cours'>{item.name}</h1>
                        <p className='text_cours'>{item.title}</p>
                    </div>
                })
            ]);
        } else if (selectedButton === 'matiére College') {
            setSliderContent([
                infocour2.map((item) => {
                    return <div className='slide'>
                        <img className='img_cours' src={item.image} />
                        <h1 className='titre_cours'>{item.name}</h1>
                        <p className='text_cours'>{item.title}</p>
                    </div>
                })
            ]);
        } else if (selectedButton === 'matiére Lycée') {
            setSliderContent([
                infocour3.map((item) => {
                    return <div className='slide'>
                        <img className='img_cours' src={item.image} />
                        <h1 className='titre_cours'>{item.name}</h1>
                        <p className='text_cours'>{item.title}</p>
                    </div>
                })
            ]);
        }
    }, [selectedButton]);

    const handleClick = (buttonName) => {
        setSelectedButton(buttonName);
    };


    return (
        <div id='cours'>
            <p className='title_cours'>Les cours disponnible</p>
            <div class="centerBox">
                <div>
                    <div class="categoryWrapper">
                        <h1>Primer</h1>
                        <button onClick={() => handleClick('matiére Primer')}>
                            <span>
                                <span>
                                    <span data-attr-span="Voir">
                                        matiére Primer
                                    </span>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>

                <div>
                    <div class="categoryWrapper">
                        <h1>College</h1>
                        <button onClick={() => handleClick('matiére College')}>
                            <span>
                                <span>
                                    <span data-attr-span="Voir">
                                        matiére College
                                    </span>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <div class="categoryWrapper">
                        <h1>Lycée</h1>
                        <button onClick={() => handleClick('matiére Lycée')}>
                            <span>
                                <span>
                                    <span data-attr-span="Voir">
                                        matiére Lycée
                                    </span>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='cours'>
                <Slider {...settings}>
                    {sliderContent}
                </Slider>
            </div>

        </div>
    )
}
export default Cours;
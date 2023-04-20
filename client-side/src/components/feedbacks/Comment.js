import React, { Component } from "react";
import './comment.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import student1 from '../../assets/images/student1.jpg';
import student2 from '../../assets/images/student2.jpg';
import student3 from '../../assets/images/student3.jpg';
import student4 from '../../assets/images/student4.jpg';
import student5 from '../../assets/images/student5.jpg';
import student6 from '../../assets/images/student6.jpg';
// import student7 from '../../assets/images/student7.jpg';
import student8 from '../../assets/images/student8.jpg';


function Comment() {

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
    const infocomment = [
        { image: student1, name: 'Rayan', comment: 'Jai été impressionné par la qualitédu contenu proposé dans ces cours en ligne,ainsi que par la disponibilité des enseignants pour répondre à mes questions' },
        { image: student2, name: 'Safae', comment: 'Les cours en ligne sont une excellente alternative pour ceux qui ont des horaires chargés ou qui vivent loin des centres de formation.' },
        { image: student3, name: 'Hamid', comment: 'Grâce aux cours en ligne, jai pu apprendre de nouvelles compétences à mon rythme et en fonction de mes besoins spécifiques.' },
        { image: student4, name: 'Ahmed', comment: 'Je recommande vivement ces servicesde cours en ligne pour tous ceuxqui cherchent à améliorer leurs compétencesou à apprendre de nouvelles choses.' },
        { image: student5, name: 'Jalila', comment: 'Les prix des cours en ligne sont souvent plus abordables que ceux des formations en présentiel, ce qui les rend accessibles à un plus grand nombre de personnes.' },
        { image: student6, name: 'Salma', comment: 'Japprécie le fait que ces cours en ligne offrent la possibilité de suivre des formations dans des domaines très spécialisés, ce qui est souvent difficile à trouver dans les centres de formation traditionnels.' },
        // { image: student7, name: 'Oussama', comment: 'Je suis très satisfait de la flexibilité offerte par les cours en ligne,qui me permettent de suivre les coursà tout moment et de nimporte où,à condition que jaie accès à Internet.' },
        { image: student8, name: 'Hajar', comment: 'Les cours en ligne sont devenus un outil indispensable pour acquérir de nouvelles compétences et se former à son rythme, où que lon soit dans le monde.' }
    ]

    return (
        <div className="feedbacks">
            <p className="part_comment">Comments</p>
            <div className="comment">

                <Slider {...settings}>
                    {infocomment.map((item) => {
                        return <div className="card">
                            <div className="card_top">
                                <img className="img_student" src={item.image} />
                                <h1>{item.name}</h1>
                            </div>
                            <div className="card_bottom">
                                <p>
                                    {item.comment}
                                </p>
                            </div>
                        </div>
                    })}


                </Slider>

            </div>
        </div>

    );

}
export default Comment;
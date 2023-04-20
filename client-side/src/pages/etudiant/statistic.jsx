import React from "react";
import EtudiantDashboard from "./dashboard";

// import './statistic.css';



function Statistic() {
    let nom = JSON.parse(localStorage.getItem("user")).nom 
    return (
        <div className="">
            <div className="justify_statistic">
                {/* <div className="name_icon">
                    <p className="hello_name">{nom}</p><p className="icon_name">👋</p>
                </div>
                <p className="welcome">Bienvenue sur ton tableau de bord</p> */}
                <label className="mes_classes">Mes classes</label>
                <div className="classes">
                    <h5>Classe de math</h5>
                    <span>Prof benissa</span>
                </div>
            </div>
        </div>
    )

}

export default Statistic;

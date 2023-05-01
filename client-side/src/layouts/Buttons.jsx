import React, { useState , useRef , useEffect } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const PrimaryButton = (props) => {
    var path = props.path;
  return (
    <button className="PrimaryButton"
    onClick={() => {
        if (path) {
            window.open(path, "_self");
        }
    }}
    {...props}
    >
        {props.text}
    </button>
  )
}

export const SecondryButton = (props) => {
    var path = props.path;
    return (
        <button className="SecondryButton"
        onClick={() => {
            if (path) {
                window.open(path, "_self");
            }
        }}
        {...props}
        >
            {props.text}
        </button>
      )
}

export const DropdownsButton = (props) => {

    let user = localStorage.getItem('user') 
    const [isOpen,setIsopen] = useState(false)
    
    const handleMenu = (e) =>{
        if(e === "parametre"){
            console.log(JSON.parse(user).role)
            if(JSON.parse(user).role === 'etudiant'){
                window.location.href = "/Etudiant/dashboard"
            }
            else if(JSON.parse(user).role === 'admin'){
                window.location.href = "admin/dashboard"
            }
            else if(JSON.parse(user).role === 'prof'){
                window.location.href = "prof/dashboard"
            }
        }
        else if(e === "sedeconnecter"){
            localStorage.removeItem('user')
            window.location.href = '/'
        }
    } 
    
      return (
        <div className="dropdown">
            {/* <img src=""/> */}
            <button className={isOpen?"DropDownsButton Active ":"DropDownsButton"}
                onClick={()=>setIsopen(!isOpen)}
                >
                {props.name}
                {!isOpen ? (
                    <ArrowDropDownIcon className='drop'

                    />
                ):(
                    <ArrowDropUpIcon className='drop'
                    />
                )}
            </button>
            {isOpen && (
                <div className='DropDown-menu'>
                    <ul>
                        <li onClick={()=>handleMenu("parametre")}>Parammetre</li>
                        <li onClick={()=>handleMenu("sedeconnecter")}>Se deconnecter</li>
                    </ul>
                </div>
            )}
        </div>
    )
} 


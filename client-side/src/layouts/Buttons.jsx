import React, { useState , useRef , useEffect } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const PrimaryButton = (props) => {
    var path = props.path;
  return (
    <button className="PrimaryButton"
        {...props}
        onClick={() => {
            if (path) {
                window.open(path, "_self");
            }
        }}
    >
        {props.text}
    </button>
  )
}

export const SecondryButton = (props) => {
    return (
      <button className="SecondaryButton">
          {props.children}
      </button>
    )
}

export const DropdownsButton = (props) => {

    
    const [isOpen,setIsopen] = useState(false)
    
    const handleMenu = (e) =>{
        if(e === "parametre"){
            window.location.href = "/parametre"
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


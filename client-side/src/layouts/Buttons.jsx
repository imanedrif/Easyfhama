import React from 'react'

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
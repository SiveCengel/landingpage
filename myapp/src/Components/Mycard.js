import React from 'react'

function Mycard(props) {
  return (
    <div className="myCard text-center p-4">
        <img width={100} src={props.cardImg} alt="" />
         <h4>{props.baslik}</h4>
         <p>{props.icerik}</p>

    </div> 

  )
}

export default Mycard;
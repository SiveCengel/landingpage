import React from 'react'
import Mycard from './Mycard'

function Section1() {
  return (
    <section className='headerCard'>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <Mycard cardImg="https://cdn-icons-png.flaticon.com/512/2010/2010957.png" baslik="Burası Başlık Bir" icerik="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></Mycard>
                </div>
                <div className="col-md-4">
                  <Mycard cardImg="https://cdn-icons-png.flaticon.com/512/8176/8176792.png" baslik="Burası Başlık İki" icerik="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></Mycard>
                </div>
                <div className="col-md-4">
                  <Mycard cardImg="https://cdn-icons-png.flaticon.com/512/8874/8874526.png" baslik="Burası Başlık Üç" icerik="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></Mycard>
                </div>
              </div>
            </div>
         </section>
  )
}

export default Section1;
import React from 'react'

function About() {
  return (
    <section className='about'>
       <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="about-left">
                    <img className='rounded-3' src="https://teknolojio.com.tr/uploads/2021/06/software-724x394.webp" alt="" />
                </div>
            </div>
            <div className="col-md-6 align-self-center">
                <div className="about-right">
                  <h4>Burada Başlık Yazıyor</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum sit enim, dignissimos, sunt quod corrupti temporibus reiciendis ullam aut at nulla commodi voluptas hic amet accusantium et, dicta adipisci ipsa.
                  Quas, nulla unde, numquam obcaecati at quae ut quod amet libero inventore perferendis saepe, laboriosam consectetur nesciunt ullam dolor sit architecto vero modi quisquam explicabo dolores ipsum. Deleniti, facere quidem.</p>
                </div>
            </div>
        </div>
       </div>
    </section>
  )
}

export default About;
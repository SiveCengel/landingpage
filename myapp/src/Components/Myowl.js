import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Myowl() {
  return (
    <div>
        <div className="container">
            <h4 className='text-center'>Ürünlerimiz</h4>
            </div>  
       <div class='container-fluid' >            
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div ><img  className="img" src= {'https://teknolojio.com.tr/uploads/2021/06/software-724x394.webp'}/></div>  
           <div><img  className="img" src= {'https://teknolojio.com.tr/uploads/2021/06/software-724x394.webp'}/></div>  
           <div><img  className="img" src= {'https://teknolojio.com.tr/uploads/2021/06/software-724x394.webp'}/></div>  
           <div><img  className="img" src= {'https://teknolojio.com.tr/uploads/2021/06/software-724x394.webp'}/></div>  
           <div><img className="img" src= {'assets/img/img5.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img6.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img7.jpg'}/></div>  
      </OwlCarousel>  
      </div>  
  
    </div>
  )
}

export default Myowl
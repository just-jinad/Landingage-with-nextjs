import React from 'react';

const Card = () => {
  return (
    <>
      <div className='' style={{ backgroundColor: '#d4dadb' }}>
        <div className='mx-auto container p-5'>
          <div className='row gap-4  '>
            <div className='card col-md-3 col-lg-3 mb-3 bg-transparent' style={{ width: '15rem' }}>
            
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <h6 className='card-subtitle mb-2 text-body-secondary'>Card subtitle</h6>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
                  <button className='btn btn-danger fw-bold'>Another link</button>
              
                <button className='btn btn-outline-warning text-danger fw-bold mt-3'>
                Another link
                </button>
              </div>
            </div>

            <div className='card col-md-3 col-lg-3 mb-3 ' style={{ width: '15rem' }}>
            <img src="https://i.pinimg.com/564x/4b/47/fe/4b47fe397c6e6a77e1e0450cfb9a974b.jpg" className="card-img-top" alt="..."/>
              <div className='card-body'>
                <h5 className='card-title'><marquee>Nordic Chair</marquee></h5>
                <h6 className='card-subtitle mb-2 text-body-secondary'>$50.00</h6>
            
              </div>
            </div>

            <div className='card col-md-3 col-lg-3 mb-3' style={{ width: '15rem' }}>
            <img src="https://i.pinimg.com/736x/8a/09/7f/8a097fe82369e285eb4eea63d1f18089.jpg" className="card-img-top" alt="..."/>
              <div className='card-body'>
                <h5 className='card-title'>   <marquee>Kuzo Aero Chair</marquee></h5>
                <h6 className='card-subtitle mb-2 text-body-secondary'>$78.00</h6>
             
            
              
              </div>
            </div>

            <div className='card col-md-3 col-lg-3 mb-3' style={{ width: '15rem' }}>
            <img src="https://i.pinimg.com/564x/86/df/d0/86dfd05e5f768ad55a8699995ead6c2d.jpg" className="card-img-top" alt="..."/>
              <div className='card-body'>
                <h5 className='card-title'><marquee>Egonomic Chair</marquee></h5>
                <h6 className='card-subtitle mb-2 text-body-secondary'>$43.00</h6>
              
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

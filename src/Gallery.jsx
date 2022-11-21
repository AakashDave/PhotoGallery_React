import React from 'react';

export default function Gallery(props) {
    return (
      <>
        <div className="d-flex flex-wrap justify-content-center">
        {
          props.menu.map((val)=>{
            return(
              <div class="card m-2" style={{width:"18rem"}}>
              <img class="card-img-top" src={val.images} style={{height:"200px"}} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">{val.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="card-text">Rs. <strong>{val.price}</strong></p>

                <a href="#" class="btn btn-outline-dark">Order Now</a>
              </div>
            </div>
            )
            
          })
          
        }
        </div> 
      </>
    )
}

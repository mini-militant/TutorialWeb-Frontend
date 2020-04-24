import React from 'react'
import '../../styles/style.css'
import '../../styles/arrow.css'
const FrontPage=()=>{
  return(
    <section id="showcase">
      <div className="container">
        <div className="content">
        <h1>Learn Something Trending</h1>
        <h5>Tired of looking for trending tech tutorials! Your wait is over.</h5>
        <h5> Scroll down to find the trending tech stacks.</h5>
        </div>
        <div className="arrow bounce">
            <i className="fa fa-angle-double-down" style={{fontSize:'70px'}}></i>
        </div>
      </div>

    </section>

  )

}


export default FrontPage

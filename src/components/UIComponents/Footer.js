import React from 'react'
import '../../styles/footer.css'
class Footer extends React.Component{

  render(){
    return(
      <div className='js-footer-area'>
      <div className='site-footer dark-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <p className='logo'>Tech Curiosity</p>
              <hr/>
              <p className='logo_under'>Be Curious. &copy; copyright-2019</p>
            </div>
            <div className="col-sm-5">
            <ul className='footer-links'>
            <li>
              <a href='/'>AboutUs</a>
            </li>
            </ul>
            </div>
            <div className='col-sm-3'>
            <ul className='social-list'>

              <li>
              <a href="/" target="_blank" >
  										<i className="fa fa-facebook-official"></i>
  									</a>
                </li>
                <li>
                <a href="/" target="_blank" >
    										<i className="fa fa-twitter"></i>
    									</a>
                  </li>
                  <li>
                  <a href="/" target="_blank" >
      										<i className="fa fa-github"></i>
      									</a>
                    </li>

            </ul>
            <div className="footer-contact-us">
              <p>Email : &nbsp;
                <a href="mail@d.c">helloDumy@gmail.com</a>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Footer

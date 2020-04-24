import React from 'react'
import Navbar from '../components/UIComponents/Navbar'
import Cards from '../components/UIComponents/Cards'
import FrontPage from '../components/UIComponents/FrontPage'
import Footer from '../components/UIComponents/Footer'
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/home.css'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        data: [],
        pending:true
      };
      fetch('https://tutorialweb-backend.herokuapp.com/api/home')
        .then(res => res.json())
        .then(response => this.setState({
          data: response,
          pending:false
        }));
      }


  render(){
    console.log('pending',this.state.pending);
    return(
      <div >
      <Navbar />
      <FrontPage />

      <section id="home-container-cards">
      <br/><br/>
      <div className="home-container" >
        <div className="home-flex-container">
        { this.state.pending
          ?
          <CircularProgress />
          :
          this.state.data.map(item=>
          <div key={item._id}>
          <Cards name={item.name} imgUrl={item.img_url} />
          </div>
        )}
        </div>
        <br/> <br/><br/>
      </div>
      </section>
      <Footer/>
      </div>
    )
  }
}
export default Home

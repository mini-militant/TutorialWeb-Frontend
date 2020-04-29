import React, { Component } from 'react';
import ResponsiveDrawer from './Layout';
import CircularProgress from '@material-ui/core/CircularProgress';
class IndexTutorial extends Component {

  constructor(props){
    super(props)
    this.state={
      tutorialIndex:[],
      tutoName:'',
      imageIcon:'',
      loading:true
    }
  }

  componentDidMount(){
    const api='/api';
    let res='';
    switch(this.props.match.path){
      case '/react':
        res = api.concat('/react');
        this.setState({
          tutoName:'React',
          imageIcon:'https://tutorialwebhome.s3.ap-south-1.amazonaws.com/React_images/ReactLogo_1.png'
        })
        break;
      case '/redux':
           res = api.concat('/redux');
           this.setState({
             tutoName:'Redux',
             imageIcon:'https://tutorialwebhome.s3.ap-south-1.amazonaws.com/Redux_images/Redux_Logo_1.png'
           })
          break;

          case '/js':
               res = api.concat('/js');
               this.setState({
                 tutoName:'JavaScript',
                 imageIcon:'https://tutorialwebhome.s3.ap-south-1.amazonaws.com/JS_Images/javascript-logo_1.png'
               })
              break;
      default:
        return null;
    }
    fetch("https://tutorialweb-backend.herokuapp.com"+res)
      .then(res=>res.json())
      .then(response=>this.setState({
        tutorialIndex:response,
        loading:false
      }));


  }


  render() {

    return (
      <div style={{position:'relative'}}>
      {
        this.state.loading
        ?
        <CircularProgress style={{position:"absolute",top:'250px',marginLeft:'50%'}}/>
        :
        <ResponsiveDrawer
          imageIcon={this.state.imageIcon}
         tutoName={this.state.tutoName}
         tutorialIndex={this.state.tutorialIndex}
         />
      }




      </div>
    );
  }
}

export default IndexTutorial;

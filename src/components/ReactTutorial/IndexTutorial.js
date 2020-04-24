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
          imageIcon:'data:image/png;base64,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'
        })
        break;
      case '/redux':
           res = api.concat('/redux');
           this.setState({
             tutoName:'Redux',
             imageIcon:'data:image/png;base64,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'
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

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../../styles/card.css'
import {withRouter} from 'react-router-dom'

class Cards extends React.Component {

  state={
    toTutorial:false
  }

  handleClick=()=>{
    this.setState({
      toTutorial:true
    })
  }


  render(){
    if(this.state.toTutorial===true){
      switch(this.props.name){
        case 'React' :
          this.props.history.push({
            pathname: '/react/react-home',
            })
           break;
        case 'Redux' :
           this.props.history.push('/redux/redux-home');
           break;
        case 'JS' :
           this.props.history.push('/js/js-home');
           break;
        default:
          this.props.history.push('/');
        }
    }
  return (
    <div className="container">
      <Card className="card" onClick={this.handleClick} >
        <CardActionArea>
        <CardMedia
          id="imageIcon"
          component="img"
          alt="img"
          height="140"
          image={this.props.imgUrl}
          />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

   </div>
  );
}
}

export default withRouter(Cards)

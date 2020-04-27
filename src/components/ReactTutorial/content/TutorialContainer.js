import React from 'react'
import Divider from '@material-ui/core/Divider';
import '../../../styles/content.css'

class ReactHome extends React.Component {


  constructor(props){
    super(props)
    this.state={
      TopicContents:[]
    }
    const api='/api';
    let res='';
    switch(this.props.match.path){
      case '/react/:topicId':
        res = api.concat('/react/getLessons');
        break;
      case '/redux/:topicId':
           res = api.concat('/redux/getLessons');
          break;
      case '/js/:topicId':
         res = api.concat('/js/getLessons');
         break;
      default:
        return null;
    }
    fetch("https://tutorialweb-backend.herokuapp.com"+res)
    .then(res=>res.json())
    .then(response=>this.setState({TopicContents:response}));

  }

render(){

  let componentVal = this;
  let tutorialName = this.state.TopicContents.filter(function(topic){
    return (topic.url_id === componentVal.props.match.params.topicId)
  })
  return (
    <div>

    <br/><br/>

      {tutorialName.map(lesson=>(
        <div key={lesson._id} style={{width:'100%'}}>
        <div className="row">
          <div className="col-sm-9">
        <h1 style={{color: 'black',
        textAlign: 'center',
        fontSize: 30,
        paddingTop:20,
        fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif'
        }}>
              {lesson.name}
        </h1><br/>

        <Divider/>
        <div style={{padding:'20px 20px 20px 50px',
        margin:'auto',
        lineHeight:'1.7em',
        width:'100%',
        height:'auto',
        textAlign:'justify'
        }}
          dangerouslySetInnerHTML={{ __html: lesson.lesson_description}}
        />
        </div>
        </div>
        </div>
      ))}

    </div>
  )
}
}

export default ReactHome

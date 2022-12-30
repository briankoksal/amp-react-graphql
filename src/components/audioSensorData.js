import React from 'react';
import Card from 'react-bootstrap/Card';



import { Amplify, PubSub, Auth } from 'aws-amplify';





 class Sensors extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        sensorMsg: '{"null": 0}'
      };
  }

  async componentDidMount(){
    

    }

  render(){
      const { sensorMsg } = this.state;
      let sensorData = sensorMsg[this.props.name];

      return(
          <div className="Sensor">
              <Card style={{ width: '18rem' }}>
                  <Card.Body>
                      <Card.Title>{this.props.name}</Card.Title>
                      <Card.Text> 
                          { sensorData } { this.props.unit }
                      </Card.Text>
                  </Card.Body>
              </Card>
              <style jsx="true">{
              `
              .Sensor {
                      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                      transition: 0.3s;
                  }
                  
                  .Sensor:hover {
                      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                  }
                  `
              }
              </style>
          </div>
      )
  }
}

export default Sensors;
import React from 'react';
import logo from './logo.svg';
import logo1 from './heartAttack1.jpg';
import './App.css';
import Webcam from "react-webcam";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
      tab: 0,
      curTime : null,
      contacts : []
    };
  }
  restAPIcall= () => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      console.log("Data is:",this.state.contacts)
    })
    .catch(console.log)
  }
  googleImageCall= () =>{
    fetch('https://vision.googleapis.com/v1p4beta1/images:annotate', {
      method: 'POST',
      headers: {
        'key' : 'AIzaSyA_vnw7F3FFDo8BqG53VAW_Zq4sGmLVAi0',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "requests": [
          {
            "image" : {
              "source": {
                "imageUri": this.state.screenshot
              }
            },
            "features": [
              {
                "type": "WEB_DETECTION"
              }
            ]
            // "image" : "https://media.graytvinc.com/images/690*388/HEART+ATTACK+CHEST+COMPRESSIONS+IMAGE.jpg"
          }
        ]
      })
    }).then(response => {
        console.log("response",response)
    })
    .catch(error =>{
        console.log("error",error)
    })
  }
  handleClick = () => {
    setInterval( () => {
      this.setState({
        screenshot : this.webcam.getScreenshot()
      });
      // this.restAPIcall();
      this.googleImageCall();
    },5000)
  }
  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <h2>{this.state.curTime}</h2>
        </div>
        <h1>react-webcam</h1>
        <Webcam
          audio={false}
          ref={node => this.webcam = node}
        />
        <div>
          <h2>CSS Filters & style prop</h2>
          <div className='webcams'>
            <Webcam
              audio={false}
              width='212'
              height='160'
            />
            <Webcam
              audio={false}
              width='212'
              height='160'
              style={{ transform: 'rotate(180deg)' }}
            />
            <Webcam
              audio={false}
              width='212'
              height='160'
            />
            <Webcam
              audio={false}
              width='212'
              height='160'
              style={{ transform: 'rotate(180deg)' }}
            />
            <Webcam
              audio={false}
              width='212'
              height='160'
            />
            <Webcam
              audio={false}
              width='212'
              height='160'
              style={{ transform: 'rotate(180deg)' }}
            />
            <Webcam
              audio={false}
              width='212'
              height='160'
            />
            <Webcam
              audio={false}
              width='212'
              height='160'
              style={{ transform: 'rotate(180deg)' }}/>
            <Webcam
              audio={false}
              width='212'
              height='160'
            />
          </div>
        </div>
        <div>
          <h2>Screenshots</h2>
          <div className='screenshots'>
            <div className='controls'>
              <button onClick={this.handleClick}>capture every 5 seconds</button>
              {/* <button onClick={this.googleImageCall}>google api</button> */}
            </div>
            {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
          </div>
        </div>
      </div>
    );
  }
}
export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";
// function App() {
//   return (
//     <div className="App">
//       <div id="webCam"></div>
//       <div id="webCamImage"></div>
//     </div>
//   );
// }
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
  handleClick = () => {
    // const screenshot = this.webcam.getScreenshot();
    // this.setState({ screenshot });
    setInterval( () => {
      this.setState({
        screenshot : this.webcam.getScreenshot()
      });
      this.restAPIcall();
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
              <button onClick={this.handleClick}>capture every 5sec</button>
            </div>
            {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
          </div>
        </div>
      </div>
    );
  }
}
export default App;

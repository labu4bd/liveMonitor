import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Webcam from "react-webcam";
 
// const WebcamComponent = () => <Webcam />;

// const videoConstraints = {
//     width: 1280,
//     height: 720,
//     facingMode: "user"
// };
// const WebcamCapture = () => {
//     const webcamRef = React.useRef(null);

//     const capture = React.useCallback(
//         () => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         },
//         [webcamRef]
//     );

//     return (
//         <>
//         <Webcam
//             audio={false}
//             height={720}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             width={1280}
//             videoConstraints={videoConstraints}
//         />
//         <button onClick={capture}>Capture photo</button>
//         </>
//     );
// };

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//     <Webcam/>,
//     document.getElementById('webCam')
//   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import { useEffect, useRef, useState } from 'react';
// import { Hands } from '@mediapipe/hands';
// import { Camera } from '@mediapipe/camera_utils';
// import * as drawingUtils from '@mediapipe/drawing_utils';
// import Navbar from '../components/Navbar';

// const classifyGesture = (landmarks) => {
//   if (!landmarks || landmarks.length === 0) return "";

//   const [thumbTip, indexTip, middleTip, ringTip, pinkyTip] = [
//     landmarks[4],
//     landmarks[8],
//     landmarks[12],
//     landmarks[16],
//     landmarks[20],
//   ];

//   const isFist =
//     indexTip.y > landmarks[5].y &&
//     middleTip.y > landmarks[9].y &&
//     ringTip.y > landmarks[13].y &&
//     pinkyTip.y > landmarks[17].y;

//   const isPalm =
//     indexTip.y < landmarks[5].y &&
//     middleTip.y < landmarks[9].y &&
//     ringTip.y < landmarks[13].y &&
//     pinkyTip.y < landmarks[17].y;

//   const isOneFinger =
//     indexTip.y < landmarks[5].y &&
//     middleTip.y > landmarks[9].y &&
//     ringTip.y > landmarks[13].y &&
//     pinkyTip.y > landmarks[17].y;

//   if (isFist) return "A";
//   if (isPalm) return "B";
//   if (isOneFinger) return "C";

//   return "";
// };

// const sendToBackend = async (landmarks) => {
//   try {
//     const response = await fetch("http://localhost:3000/predict", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ points: landmarks.flatMap(lm => [lm.x, lm.y]) })
//     });
//     const data = await response.json();
//     return data.prediction;
//   } catch (error) {
//     console.error("Error:", error);
//     return "";
//   }
// };

// const Detect = () => {
//   const [output, setOutput] = useState("");
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const hands = new Hands({
//       locateFile: (file) =>
//         `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
//     });

//     hands.setOptions({
//       maxNumHands: 1,
//       modelComplexity: 1,
//       minDetectionConfidence: 0.7,
//       minTrackingConfidence: 0.7,
//     });

//     hands.onResults(async (results) => {
//       const canvasElement = canvasRef.current;
//       const canvasCtx = canvasElement.getContext('2d');

//       canvasCtx.save();
//       canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

//       canvasCtx.drawImage(
//         results.image,
//         0,
//         0,
//         canvasElement.width,
//         canvasElement.height
//       );

//       if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
//         const landmarks = results.multiHandLandmarks[0];
//         // const detectedChar = classifyGesture(landmarks);
//         const detectedChar = await sendToBackend(landmarks);


//         if (detectedChar) {
//           setOutput((prev) => {
//             if (prev.endsWith(detectedChar)) return prev;
//             return prev + detectedChar;
//           });
//         }

//         for (const lm of results.multiHandLandmarks) {
//           drawingUtils.drawConnectors(canvasCtx, lm, Hands.HAND_CONNECTIONS, {
//             color: '#00FF00',
//             lineWidth: 3,
//           });
//           drawingUtils.drawLandmarks(canvasCtx, lm, {
//             color: '#FF0000',
//             lineWidth: 1,
//           });
//         }
//       }

//       canvasCtx.restore();
//     });

//     let camera = null;
//     if (videoRef.current) {
//       camera = new Camera(videoRef.current, {
//         onFrame: async () => {
//           await hands.send({ image: videoRef.current });
//         },
//         width: 640,
//         height: 480,
//       });
//       camera.start();
//     }
//   }, []);

//   return (
//     <>
      
//       <div className="flex flex-col items-center justify-center mt-10 px-4">
//         <h1 className="text-3xl font-bold text-white mb-6">Live Hand Detection</h1>

//         <div className="relative w-full max-w-2xl aspect-video">
//           <video
//             ref={videoRef}
//             className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
//             style={{ visibility: 'hidden' }}
//             playsInline
//           ></video>

//           <canvas
//             ref={canvasRef}
//             className="absolute top-0 left-0 w-full h-full rounded-lg"
//           ></canvas>
//         </div>

        
//         <p className="mt-6 text-xl text-white font-semibold">
//           Detected: <span className="text-green-400">{output}</span>
//         </p>
//       </div>
//     </>
//   );
// };

// export default Detect;




import { useEffect, useRef, useState } from 'react';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import * as drawingUtils from '@mediapipe/drawing_utils';

const classifyGesture = (landmarks) => {
  if (!landmarks || landmarks.length === 0) return "";

  const [thumbTip, indexTip, middleTip, ringTip, pinkyTip] = [
    landmarks[4],
    landmarks[8],
    landmarks[12],
    landmarks[16],
    landmarks[20],
  ];

  
  const isFist =
    indexTip.y > landmarks[5].y &&
    middleTip.y > landmarks[9].y &&
    ringTip.y > landmarks[13].y &&
    pinkyTip.y > landmarks[17].y;

  const isPalm =
    indexTip.y < landmarks[5].y &&
    middleTip.y < landmarks[9].y &&
    ringTip.y < landmarks[13].y &&
    pinkyTip.y < landmarks[17].y;

  const isOneFinger =
    indexTip.y < landmarks[5].y &&
    middleTip.y > landmarks[9].y &&
    ringTip.y > landmarks[13].y &&
    pinkyTip.y > landmarks[17].y;

  if (isFist) return "A";
  if (isPalm) return "B";
  if (isOneFinger) return "C";

  return "";
};

const Detect = () => {
  const [output, setOutput] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraRef = useRef(null); 

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    hands.onResults((results) => {
      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext('2d');

      // ✅ Set proper canvas size
      canvasElement.width = results.image.width;
      canvasElement.height = results.image.height;

      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );

      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const landmarks = results.multiHandLandmarks[0];
        const detectedChar = classifyGesture(landmarks);

        if (detectedChar) {
          setOutput((prev) => {
            if (prev.endsWith(detectedChar)) return prev;
            return prev + detectedChar;
          });
        }

        for (const lm of results.multiHandLandmarks) {
          drawingUtils.drawConnectors(canvasCtx, lm, Hands.HAND_CONNECTIONS, {
            color: '#00FF00',
            lineWidth: 3,
          });
          drawingUtils.drawLandmarks(canvasCtx, lm, {
            color: '#FF0000',
            lineWidth: 1,
          });
        }
      }

      canvasCtx.restore();
    });

    if (videoRef.current) {
      cameraRef.current = new Camera(videoRef.current, {
        onFrame: async () => {
          await hands.send({ image: videoRef.current });
        },
        width: 640,
        height: 480,
      });
      cameraRef.current.start();
    }

    
    return () => {
      if (cameraRef.current) {
        cameraRef.current.stop();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4">
      <h1 className="text-3xl font-bold text-white mb-6">Live Hand Detection</h1>

      <div className="relative w-full max-w-2xl aspect-video">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          style={{ visibility: 'hidden' }}
          playsInline
        ></video>

        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        ></canvas>
      </div>

      <p className="mt-6 text-xl text-white font-semibold">
        Detected: <span className="text-green-400">{output}</span>
      </p>
    </div>
  );
};

export default Detect;

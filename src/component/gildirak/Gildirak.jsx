// import React, {useState, useRef} from "react";
// import useWindowSize from "react-use/lib/useWindowSize";
// import Confetti from "react-confetti";
// import WheelSpin from "./wheelSpin/wheelSpin";

// export const Gildirak = () => {
//     let [flag, setFlag] = useState(false);
//     const confetiRef = useRef(null);

//     const {width, height} = useWindowSize();

//     const spinClicked = (value) => {
//         setFlag(value);
//     };

//     return (
//         <div className="body">
//             <div className="confettie-wrap" ref={confetiRef}>
//                 <Confetti
//                     run={flag}
//                     numberOfPieces={150}
//                     width={width}
//                     height={height}
//                 />
//             </div>
//             <h2> Spin and win </h2>
//             <br/>
//             <br/>
//             <WheelSpin spinClicked={spinClicked}/>
//             <br/>
//             <br/>
//             {flag ? (
//                 <div className="btnGrid">
//                     <div className="tryLuckbtn">
//                         <span>Claim your prize</span>
//                     </div>
//                 </div>
//             ) : (
//                 <div></div>
//             )}
//         </div>
//     );
// }

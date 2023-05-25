import React from "react";
import "./../wheelSpin/wheelSpin.css";

const WheelSpin = (props) => {
    const letsSpin = () => {
        let x = 1024; //min value
        let y = 9999; //max value

        let deg = Math.floor(Math.random() * (x - y)) + y;

        document.getElementById("wheel").style.transform =
            "rotate(" + 1665 + "deg)";
        let elements = document.getElementsByClassName("spinText");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.transform = "rotate(-" + 1665 + "deg)";
        }
        setTimeout(() => {
            props.spinClicked(true);
        }, 2500);
    };

    return (
        <div id="main" className="main">
            <div id="wheel" className="wheel">
                <div>
          <span id={"spanjon"} className="span1">
            <p className="spinText">8%</p>
          </span>
                    <span id={"spanjon"} className="span2">
            <p className="spinText">🥲</p>
          </span>
                    <span id={"spanjon"} className="span3">
            <p className="spinText">🥲</p>
          </span>
                    <span id={"spanjon"} className="span4">
            <p className="spinText">🥲</p>
          </span>

                    <span id={"spanjon"} className="span5">
            <p className="spinText">5%</p>
          </span>
                    <span id={"spanjon"} className="span6">
            <p className="spinText">2%</p>
          </span>
                    <span id={"spanjon"} className="span7">
            <p className="spinText">2%</p>
          </span>
                    <span id={"spanjon"} className="span8">
            <p className="spinText">5%</p>
          </span>
                </div>
            </div>

            <button className="spin" onClick={letsSpin}>
                <div className="arrowHead"/>
                <div className="arrowHead1"/>
                SPIN
            </button>
        </div>
    );
};

export default WheelSpin;

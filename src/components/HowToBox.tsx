import { CloseButton } from "react-bootstrap";


const HowToBox = ({ onClose }:{
    onClose: () => void;

}) => {
    return (
        <div className="overlay">
            <div className="info-box">
                <div className="x-button">
                    <CloseButton variant="white" onClick={onClose}></CloseButton>
                </div>
                <div className="info-box-header">
                    <h3>How to play</h3>
                </div>
                <div className="info-box-content">
                    <p>Inspired by the popular wordle game <a href="https://dotadle.net/">Dotadle.</a></p>
                    <p>Each day, you can guess a new hero from a curated selection of the current hero pool.</p>
                    <br />
                    <h3>Feedback</h3>
                    <hr />
                    <p>Errors, bugs, or suggestions will not be taken into consideration.</p>
                    <br />
                    <p>Enjoy!</p>
                </div>
            </div>
        </div>
       
    );
};

export default HowToBox;
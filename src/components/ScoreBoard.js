import "./ScoreBoard.css";

export default function ScoreBoard(props) {
  console.log(props);
  return (
    <div className="scoreBoard">
      <div className="board left">
        <span>Current Score: </span>
        <span>{props.currentScore}</span>
      </div>
      <div className="board right">
        <span>{"Best Score: "}</span>
        <span>{props.bestScore}</span>
      </div>
    </div>
  );
}

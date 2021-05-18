import "./CardGrid.css";

export default function CardGrid(props) {
  // console.log(props.data);

  return <div className="cardGrid">{props.children}</div>;
}

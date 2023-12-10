import { Link } from "react-router-dom";

export default function Course(props) {
  return (
    <div className="course">
      <img src={props.image} alt="image" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>

      <Link to={"/course/" + props.id} className="link">
        See more
      </Link>
    </div>
  );
}

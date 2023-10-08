function Card(props) {
    return (
      <div className="Card">
      <img src={props.imgUrl} alt="icon"/>
      <h3 className="description">{props.header}</h3>
      <p className="description paragraph">{props.description}</p>
      </div>
    );
  }
  
  export default Card;
import Card from "./Card";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";


function Gallery(props) {
    return (
      <div className="Gallery">
      <Card imgUrl={icon1} header="Declarative" description="React makes it painless to create interactive UIs."/>
      <Card imgUrl={icon2} header="Components" description="Build encapsulated components that manage their state."/>
      <Card imgUrl={icon3} header="Single-Way" description="A set of immutable values are passed to the components."/>
      <Card imgUrl={icon4} header="JSX" description="Statically-typed. designed to run on modern browsers."/>
      </div>
    );
  }
  
  export default Gallery;
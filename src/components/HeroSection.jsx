import { Carousel } from "react-bootstrap";
import cartimg from "../assets/images/cartimg.png";
import { useProjectInfoContext } from "../context/ProjectInfoContext";

export default function HeroSection() {
  const { info } = useProjectInfoContext();
  return (
    <div className="p-4">
      <Carousel>
        {info.map((info) => {
          return (
            <Carousel.Item key={info.id}>
              <img
                src={cartimg}
                className="d-block w-100 pt-0 p-4 m-4"
                alt="First slide"
                height={600}
              />
              <Carousel.Caption>
                <h3>{info.name}</h3>
                <p>{info.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

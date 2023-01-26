import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

// we create a styled hero wich will get its backgroun image from the props so the hero picture will dinamically change according to the room type (so a deluxe room shows a deluxe room as the hero background, a presidential will show a presidentia pic and so on).

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;

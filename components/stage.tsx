import styled from "styled-components";
import { DisplayVal } from './data';

interface StageProps {
  display?: DisplayVal
}

const Stage = styled.div<StageProps>`
  color: ${props => props.color};
  margin: auto;
  font-weight: 600;
  font-size: ${props =>
    props.display === "Coffee" || props.display === "Defer" ? "5rem" : "12rem"};
`;

export default Stage;

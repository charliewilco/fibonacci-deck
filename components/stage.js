import styled from "styled-components";

const Stage = styled.div`
  color: ${props => props.color};
  margin: auto;
  font-weight: 600;
  font-size: ${props =>
    props.display === "Coffee" || props.display === "Defer" ? "5rem" : "12rem"};
`;

export default Stage;

import styled from "styled-components";

const Card = styled.div`
  color: white;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 4px;
  padding: 40px 8px;
  background: ${props => props.color};
  text-align: center;
  font-size: 32px;
  cursor: pointer;
  font-weight: 300;
  line-height: 1;
  width: 84px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.035), 0 4px 8px rgba(0, 0, 0, 0.07);
`;

export default Card;

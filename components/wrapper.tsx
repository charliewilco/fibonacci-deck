import styled from "styled-components";

interface WrapperProps {
  open: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  background: #092e41;
  position: relative;
  align-items: center;
  height: ${props => (!props.open ? "100%" : "calc(100% - 144px)")};
`;

export default Wrapper;

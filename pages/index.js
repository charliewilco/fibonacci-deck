import React, { Component } from "react";
import styled from "styled-components";
import "../global.css";
import f from "fib";

import Coffee from "../components/coffee";
// import { Helmet } from "react-helmet";

// TODO: Clean up array of cards
// TODO: Use map to create cards

const Fib = ({ number, color, onClick }) => (
  <Card color={color} onClick={() => onClick(f(number))}>
    {f(number)}
  </Card>
);

// const fib = Array().fill(12);

const N = 12;
const fib = Array.apply(null, { length: N })
  .map(Number.call, Number)
  .map(n => f(n))
  .map(fn => ({ value: fn, display: fn }));
console.log(fib);

const data = [
  {
    value: 0,
    display: 0
  },
  ...fib,
  {
    value: "?",
    display: "?"
  },
  {
    value: "∞",
    display: "∞"
  },
  {
    value: "Defer",
    display: "➳"
  },
  {
    value: "Coffee",
    display: (
      <Coffee
        style={{ margin: "-5px 0 -5px", display: "inline-block" }}
        alt="coffee pot"
      />
    )
  }
];

// const Head = ({ color }) => (
//   <Helmet>
//     {(color === "#FFBA00" || color === null) && (
//       <meta name="theme-color" content="#FFBA00" />
//     )}
//     {color === "#00B6F0" && <meta name="theme-color" content="#00B6F0" />}
//     {color === "#E05557" && <meta name="theme-color" content="#E05557" />}
//   </Helmet>
// );

const Card = styled.div`
  display: inline-block;
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

const Tray = styled.div`
  display: block;
  position: fixed;
  white-space: nowrap;
  overflow-x: auto;
  background: #063651;
  padding: 16px;
  left: 0;
  right: 0;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

const ChevronContainer = styled.div`
  display: block;
  cursor: pointer;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8px;
  text-align: right;
`;

const OpenClose = ({ open, onClick }) => (
  <ChevronContainer onClick={onClick}>
    <img
      src={
        open
          ? "https://icon.now.sh/chevronDown/CCC"
          : "https://icon.now.sh/chevronUp/CCC"
      }
      alt="down icon"
    />
  </ChevronContainer>
);

const Container = styled.div`
  font-family: "Hind", sans-serif;
  height: 100%;
`;

const colors = ["#E05557", "#FFBA00", "#00B6F0"];

const Stage = styled.div`
  color: ${props => props.color};
  margin: auto;
  font-weight: 600;
  font-size: ${props =>
    props.display === "Coffee" || props.display === "Defer" ? "5rem" : "12rem"};
`;

const Wrapper = styled.div`
  display: flex;
  background: #092e41;
  position: relative;
  align-items: center;
  height: ${props => (!props.open ? "100%" : "calc(100% - 144px)")};
`;

const Intro = styled.p`
  margin: auto;
  opacity: 0.5;
  color: white;
`;

export default class extends Component {
  state = {
    display: null,
    open: true,
    color: "white"
  };

  update = n => this.setState({ display: n });

  render() {
    const { display, color, open } = this.state;
    return (
      <Container>
        <Wrapper open={open}>
          {display === null ? (
            <Intro>Tap a Card Below</Intro>
          ) : (
            <Stage color={color} display={display}>
              {display}
            </Stage>
          )}
          <OpenClose
            open={open}
            onClick={() => this.setState({ open: !open })}
          />
        </Wrapper>
        {open && (
          <Tray>
            {data.map((d, idx) => (
              <Card key={idx} color="teal" onClick={() => this.update(d.value)}>
                {d.display}
              </Card>
            ))}
          </Tray>
        )}
      </Container>
    );
  }
}

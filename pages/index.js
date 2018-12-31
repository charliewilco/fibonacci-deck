import React from "react";
import Toggle from "../components/toggle";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Intro from "../components/intro";
import Stage from "../components/stage";
import OpenClose from "../components/open-close";
import Tray from "../components/tray";
import Card from "../components/card";
import data from "../components/data";
import "../components/global.css";
import ColorMeta from "../components/color-meta";

// TODO: Clean up array of cards
// TODO: Use map to create cards

const Fib = ({ number, color, onClick }) => (
  <Card color={color} onClick={() => onClick(f(number))}>
    {f(number)}
  </Card>
);

export default class extends React.Component {
  state = {
    display: null,
    color: "white"
  };

  determineColor(idx) {
    const red = [0, 3, 6, 9, 12, 15, 18];
    const yellow = [1, 4, 7, 10, 13, 16];
    const colors = ["#E05557", "#FFBA00", "#00B6F0"];
    return red.includes(idx)
      ? colors[0]
      : yellow.includes(idx)
      ? colors[1]
      : colors[2];
  }

  update = (n, color) => this.setState({ display: n, color });

  render() {
    return (
      <Toggle>
        {({ isOpen, onToggle }) => (
          <Container>
            <ColorMeta color={this.state.color} />
            <Wrapper open={isOpen}>
              {this.state.display === null ? (
                <Intro>Tap a Card Below</Intro>
              ) : (
                <Stage color={this.state.color} display={this.state.display}>
                  {this.state.display}
                </Stage>
              )}
              <OpenClose open={isOpen} onClick={onToggle} />
            </Wrapper>
            {isOpen && (
              <Tray>
                {data.map((d, idx, _data) => {
                  const color = this.determineColor(idx);
                  return (
                    <div style={{ display: "inline-block" }}>
                      <Card
                        key={idx}
                        color={color}
                        onClick={() => this.update(d.value, color)}
                      >
                        {d.display}
                      </Card>
                    </div>
                  );
                })}
              </Tray>
            )}
          </Container>
        )}
      </Toggle>
    );
  }
}

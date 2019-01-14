import * as React from "react";
import Head from "next/head";
import Toggle from "../components/toggle";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Intro from "../components/intro";
import Stage from "../components/stage";
import OpenClose from "../components/open-close";
import Tray from "../components/tray";
import Card from "../components/card";
import data, { DisplayVal } from "../components/data";
import "../components/global.css";
import ColorMeta from "../components/color-meta";


interface IndexProps {}

interface IndexState {
  color: string;
  display?: DisplayVal;
}

export default class Index extends React.Component<IndexProps, IndexState> {
   public readonly state = {
    display: undefined,
    color: "white"
  };

  private determineColor(idx: number): string {
    const red = [0, 3, 6, 9, 12, 15, 18];
    const yellow = [1, 4, 7, 10, 13, 16];
    const colors = ["#E05557", "#FFBA00", "#00B6F0"];
    return red.includes(idx)
      ? colors[0]
      : yellow.includes(idx)
      ? colors[1]
      : colors[2];
  }

  private update = (n: DisplayVal, color: string): void => {
    this.setState({ display: n, color })
  };

  public render(): JSX.Element {
    return (
      <Toggle>
        {({ isOpen, onToggle }) => (
          <Container>
            <Head>
              <title>Fibonacci</title>
            </Head>
            <ColorMeta color={this.state.color} />
            <Wrapper open={isOpen}>
              {this.state.display === "undefined" ? (
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
                    <div key={idx} style={{ display: "inline-block" }}>
                      <Card
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

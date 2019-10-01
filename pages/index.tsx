import * as React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import Wrapper from '../components/wrapper';
import Intro from '../components/intro';
import Stage from '../components/stage';
import OpenClose from '../components/open-close';
import Tray from '../components/tray';
import Card from '../components/card';
import data, {DisplayVal} from '../components/data';
import '../components/global.css';

export default function Index(): JSX.Element {
  const [display, setDisplay] = React.useState<DisplayVal | undefined>(
    undefined,
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  function onToggle() {
    setIsOpen(prev => !prev);
  }

  function updateCard(n: DisplayVal): void {
    setDisplay(n);
  }

  return (
    <Container>
      <Head>
        <title>Fibonacci</title>
      </Head>
      <Wrapper open={isOpen}>
        {display === undefined ? (
          <Intro>Tap a Card Below</Intro>
        ) : (
          <Stage color="white" display={display}>
            {display}
          </Stage>
        )}
        <OpenClose open={isOpen} onClick={onToggle} />
      </Wrapper>
      {isOpen && (
        <Tray>
          {data.map((d, idx, _data) => {
            return (
              <Card key={idx} onTap={() => updateCard(d.value)}>
                {d.display}
              </Card>
            );
          })}
        </Tray>
      )}
    </Container>
  );
}

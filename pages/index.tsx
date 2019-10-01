import * as React from 'react';
import Head from 'next/head';
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
    <main style={{height: '100%'}}>
      <Head>
        <title>Fibonacci</title>
        <link rel="icon" href="static/favicon.ico" />
      </Head>
      <div
        style={{
          display: 'flex',
          background: '#092e41',
          position: 'relative',
          alignItems: 'center',
          height: !isOpen ? '100%' : 'calc(100% - 144px)',
        }}>
        {display === undefined ? (
          <Intro>Tap a Card Below</Intro>
        ) : (
          <Stage color="white" display={display}>
            {display}
          </Stage>
        )}
        <OpenClose open={isOpen} onClick={onToggle} />
      </div>
      {isOpen && (
        <Tray>
          {data.map((d, idx) => {
            return (
              <Card key={idx} onTap={() => updateCard(d.value)}>
                {d.display}
              </Card>
            );
          })}
        </Tray>
      )}
    </main>
  );
}

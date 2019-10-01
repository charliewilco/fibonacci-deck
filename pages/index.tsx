import * as React from 'react';
import Head from 'next/head';
import Chevron from '../components/open-close';
import Card from '../components/card';
import data, {DisplayVal} from '../components/data';
import '../components/global.css';

export default function Index(): JSX.Element {
  const [display, setDisplay] = React.useState<DisplayVal | undefined>(
    undefined,
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <main>
      <Head>
        <title>Fibonacci</title>
        <link rel="icon" href="static/favicon.ico" />
      </Head>
      <div
        className="DisplayWrapper"
        style={{
          height: !isOpen ? '100%' : 'calc(100% - 144px)',
        }}>
        {!display ? (
          <p className="Intro">Tap a Card Below</p>
        ) : (
          <header
            className="Stage"
            style={{
              fontSize: display === 'Coffee' || display === 'Defer' ? 80 : 192,
            }}>
            {display}
          </header>
        )}
        <Chevron open={isOpen} onClick={() => setIsOpen(prev => !prev)} />
      </div>
      {isOpen && (
        <div className="Tray">
          {data.map((d, idx) => {
            const onTap = () => setDisplay(d.value);
            return (
              <Card key={idx} onTap={onTap}>
                {d.display}
              </Card>
            );
          })}
        </div>
      )}
    </main>
  );
}

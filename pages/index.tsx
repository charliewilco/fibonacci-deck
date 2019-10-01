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
        {!display ? (
          <p
            style={{
              margin: 'auto',
              opacity: 0.5,
              color: 'white',
            }}>
            Tap a Card Below
          </p>
        ) : (
          <header
            className="Stage"
            style={{
              color: 'white',
              margin: 'auto',
              fontWeight: 600,
              fontSize:
                display === 'Coffee' || display === 'Defer' ? '5rem' : '12rem',
            }}>
            {display}
          </header>
        )}
        <Chevron open={isOpen} onClick={onToggle} />
      </div>
      {isOpen && (
        <div
          className="Tray"
          style={{
            display: 'block',
            position: 'fixed',
            whiteSpace: 'nowrap',
            overflowX: 'auto',
            background: '#063651',
            padding: '16px',
            left: '0',
            right: '0',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: '-ms-autohiding-scrollbar',
          }}>
          {data.map((d, idx) => {
            return (
              <Card key={idx} onTap={() => updateCard(d.value)}>
                {d.display}
              </Card>
            );
          })}
        </div>
      )}
    </main>
  );
}

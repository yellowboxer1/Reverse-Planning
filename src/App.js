import React, { useEffect, useMemo, useRef, useState } from 'react';
import Frame from './Frame';

const DESIGN_WIDTH = 1920;

function App() {
  const frameRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      const nextScale = Math.min(window.innerWidth / DESIGN_WIDTH, 1);
      setScale(nextScale);

      if (frameRef.current) {
        setContentHeight(frameRef.current.scrollHeight);
      }
    };

    const observer =
      typeof ResizeObserver !== 'undefined' && frameRef.current
        ? new ResizeObserver(() => updateLayout())
        : null;

    if (observer && frameRef.current) {
      observer.observe(frameRef.current);
    }

    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  const viewportStyle = useMemo(
    () => ({
      backgroundColor: '#070503',
      minHeight: '100vh',
      overflowX: 'hidden'
    }),
    []
  );

  const scaledStageStyle = useMemo(
    () => ({
      width: `${DESIGN_WIDTH * scale}px`,
      height: `${contentHeight * scale}px`,
      margin: '0 auto',
      position: 'relative'
    }),
    [contentHeight, scale]
  );

  const contentStyle = useMemo(
    () => ({
      width: `${DESIGN_WIDTH}px`,
      transform: `scale(${scale})`,
      transformOrigin: 'top left'
    }),
    [scale]
  );

  return (
    <div style={viewportStyle}>
      <div style={scaledStageStyle}>
        <div ref={frameRef} style={contentStyle}>
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default App;

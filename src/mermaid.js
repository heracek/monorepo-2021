import * as React from 'react';
import MermaidBase from 'react-mermaid2';

export function Mermaid({ children, zoom = 1 }) {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div style={{ zoom: zoom * 1.5 }}>
      <MermaidBase
        key={children}
        config={{ theme: 'neutral' }}
        chart={children}
      />
    </div>
  );
}

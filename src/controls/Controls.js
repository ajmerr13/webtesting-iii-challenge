import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div data-testid='controls' className="controls panel">
    <button data-testid='lockButton' disabled={!closed} onClick={toggleLocked} className="toggle-btn">
      {locked ? 'Unlock Gate' : 'Lock Gate'}
    </button>
    <button data-testid='actionButton' disabled={locked} onClick={toggleClosed} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;

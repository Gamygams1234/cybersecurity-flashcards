// components/ScoreSummary.js
import React from 'react';

function ScoreSummary({ score, total, restart }) {
  return (
    <div className="summary">
      <h2>Quiz Complete!</h2>
      <p>You got {score} out of {total} correct.</p>
      <button onClick={restart}>Try Again</button>
    </div>
  );
}

export default ScoreSummary;

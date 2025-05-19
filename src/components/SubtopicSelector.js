// components/SubtopicSelector.js
import React from 'react';

function SubtopicSelector({ subtopics, setSubtopic }) {
  return (
    <div className="selector">
      <h2>Select a Subtopic</h2>
      {subtopics.map((sub, i) => (
        <button key={i} onClick={() => setSubtopic(sub)}>
          {sub}
        </button>
      ))}
    </div>
  );
}

export default SubtopicSelector;

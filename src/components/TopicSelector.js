// components/TopicSelector.js
import React from 'react';

function TopicSelector({ topics, setTopic }) {
  return (
    <div className="selector">
      <h2>Select a Topic</h2>
      {topics.map((topic, i) => (
        <button key={i} onClick={() => setTopic(topic)}>
          {topic}
        </button>
      ))}
    </div>
  );
}

export default TopicSelector;

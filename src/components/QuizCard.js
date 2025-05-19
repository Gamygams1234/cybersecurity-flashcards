import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function normalize(str) {
  return str.trim().toLowerCase();
}

function QuizCard({ question, onAnswer }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [correctIndex, setCorrectIndex] = useState(null);

  useEffect(() => {
    const correctAnswer = question.options[question.answerIndex];
    const shuffled = shuffleArray([...question.options]);
    const newAnswerIndex = shuffled.findIndex(
      (opt) => normalize(opt) === normalize(correctAnswer)
    );

    setShuffledOptions(shuffled);
    setCorrectIndex(newAnswerIndex);
    setSelectedIndex(null);
    setIsSubmitted(false);
  }, [question]);

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    setIsSubmitted(true);
  };

  const handleNext = () => {
    const isCorrect = selectedIndex === correctIndex;
    onAnswer(isCorrect);
  };

  return (
    <div className="quiz-card">
      <h2>{question.question}</h2>
      <ul>
        {shuffledOptions.map((opt, idx) => (
          <li
            key={idx}
            className={clsx({
              correct: isSubmitted && idx === correctIndex,
              wrong: isSubmitted && idx === selectedIndex && idx !== correctIndex,
              selected: !isSubmitted && idx === selectedIndex,
            })}
            onClick={() => {
              if (!isSubmitted) setSelectedIndex(idx);
            }}
          >
            {opt}
          </li>
        ))}
      </ul>

      {!isSubmitted ? (
        <button disabled={selectedIndex === null} onClick={handleSubmit}>
          Submit
        </button>
      ) : (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
}

export default QuizCard;

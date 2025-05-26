import React, { useState, useEffect } from 'react';
import TopicSelector from './components/TopicSelector';
import SubtopicSelector from './components/SubtopicSelector';
import QuizCard from './components/QuizCard';
import ScoreSummary from './components/ScoreSummary';
import questions from './data/questions';
import './App.scss';

function App() {
  const [topic, setTopic] = useState('');
  const [subtopic, setSubtopic] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    if (topic && subtopic) {
      const questionSet = questions[topic][subtopic];
      setShuffledQuestions(shuffleArray(questionSet));
      setQuestionIndex(0);
      setScore(0);
      setShowSummary(false);
    }
  }, [topic, subtopic]);

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    if (questionIndex + 1 < shuffledQuestions.length) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const restart = () => {
    setQuestionIndex(0);
    setScore(0);
    setShowSummary(false);
    setTopic('');
    setSubtopic('');
    setShuffledQuestions([]);
  };

  const currentQuestion = shuffledQuestions[questionIndex];

  return (
    <div className="app">
      {!topic && (
        <TopicSelector topics={Object.keys(questions)} setTopic={setTopic} />
      )}

      {topic && !subtopic && (
        <SubtopicSelector
          subtopics={Object.keys(questions[topic])}
          setSubtopic={setSubtopic}
          restart={restart}
        />
      )}

      {topic && subtopic && showSummary && (
        <ScoreSummary score={score} total={shuffledQuestions.length} restart={restart} />
      )}

      {topic && subtopic && !showSummary && currentQuestion && (
        <QuizCard question={currentQuestion} onAnswer={handleAnswer} restart={restart} />
      )}

      {topic && subtopic && !showSummary && !currentQuestion && (
        <div>Loading question...</div>
      )}
    </div>
  );
}

export default App;

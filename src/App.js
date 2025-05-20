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
      setQuestionIndex(0); // Reset index each time
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

    const currentSet = questions[topic][subtopic];
    if (questionIndex + 1 < currentSet.length) {
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
  };


  if (!topic) {
    return <TopicSelector topics={Object.keys(questions)} setTopic={setTopic} />;
  }

  if (!subtopic) {
    return <SubtopicSelector subtopics={Object.keys(questions[topic])} setSubtopic={setSubtopic} restart={restart} />;
  }

  if (showSummary) {
    return <ScoreSummary score={score} total={shuffledQuestions.length} restart={restart} />
    ;
  }


    
  const currentQuestion = shuffledQuestions[questionIndex];
  if (!currentQuestion) {
    return <div>Loading question...</div>; // or a custom loader/spinner
  }

  return (
    <QuizCard question={currentQuestion} onAnswer={handleAnswer} restart={restart} />
  );
}

export default App;

import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import QuestioCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./Api";
import { difficulty } from "./Api";
const TOTAL_QUESTIONS = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setquestions] = useState([]);
  const [number, setnumber] = useState(0);
  const [userAnswers, setuserAnswers] = useState([]);
  const [score, setscore] = useState(0);
  const [gameOver, setgameOver] = useState(true);

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, difficulty.EASY));
  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="Score">Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestioCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;

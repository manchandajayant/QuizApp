import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import QuestioCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./Api";
import { QuestionState, difficulty } from "./Api";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const TOTAL_QUESTIONS = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setquestions] = useState<QuestionState[]>([]);
  const [number, setnumber] = useState(0);
  const [userAnswers, setuserAnswers] = useState<AnswerObject[]>([]);
  const [score, setscore] = useState(0);
  const [gameOver, setgameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setgameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      difficulty.EASY
    );
    setquestions(newQuestions);
    setscore(0);
    setuserAnswers([]);
    setnumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  console.log(questions);
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

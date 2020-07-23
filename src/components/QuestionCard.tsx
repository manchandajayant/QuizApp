import React from "react";

type props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

const QuestioCard: React.FC<props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div>
      <div>
        <p>
          Question:{questionNumber}/{totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div>
        {answers.map((ans) => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: ans }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestioCard;

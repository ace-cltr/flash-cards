import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question:
      "Kush and Luv together take 10 days to complete the work. If Kush alone takes 15 days to complete the work, then how long will Luv alone take to complete the work?",
    answer: "30 days",
  },
  {
    id: 7336,
    question:
      "Who is the first Indian woman to win gold at the U-20 world championships?",
    answer: "Antim Panghal",
  },
  {
    id: 8832,
    question: "Who is the current CEO of NITI Aaayog?",
    answer: "B. V. R. Subrahmanyam",
  },
  {
    id: 1297,
    question:
      "The cost of apples is increased by 20% and then decreased by 20%. What is the net pecentage decrease?",
    answer: "4%",
  },
  {
    id: 9103,
    question:
      "Find grammer-error : Daniel sat on / his new bike / and went after / a ride?",
    answer: "and went after",
  },
  {
    id: 2002,
    question:
      "Select the most appropriate ANTONYM of the given word 'Anxiety'?",
    answer: "Relief",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function reveal(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question, i) => (
        <div
          onClick={() => reveal(question.id)}
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p1>
            {question.id === selectedId ? question.answer : question.question}
          </p1>
        </div>
      ))}
    </div>
  );
}

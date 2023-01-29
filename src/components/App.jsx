import React, { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const incrementTotal = () => {
    setTotal(total + 1);
  };

  const positivePercentage = total > 0 ? (good / total) * 100 : 0;

  return (
    <div>
      <h1>Give Feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
          incrementTotal();
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
          incrementTotal();
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
          incrementTotal();
        }}
      >
        Bad
      </button>
      {total > 0 && (
        <>
          <h1>Statistics</h1>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive Feedback: {positivePercentage}%</p>
        </>
      )}
    </div>
  );
}

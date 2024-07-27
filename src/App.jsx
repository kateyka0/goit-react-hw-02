import { useState, useEffect } from "react";
import React from 'react';
import './App.css'
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () =>  {
  const [feedbacks, setFeedbacks] = useState(() => {
    const feedbacks = JSON.parse(
      window.localStorage.getItem("feedbacks-value")
    );
    if (feedbacks) return feedbacks;
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedbacks-value", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedbacks({
        ...feedbacks,
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setFeedbacks({
        ...feedbacks,
        [feedbackType]: feedbacks[feedbackType] + 1,
      });
    }
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const percentPositive =
    totalFeedback > 0 ? Math.round((feedbacks.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          percentPositive={percentPositive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App

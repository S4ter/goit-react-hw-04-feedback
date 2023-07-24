import React, { useState } from 'react';
import { FeedbackOptions } from './feedbackoptions/FeedbackOptions';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';
import { Notification } from 'components/notification/Notification';
const options = ['Good', 'Neutral', 'Bad'];

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const countPositiveFeedback = () => {
    if (good === 0) {
      setPositiveFeedback(0);
    } else {
      setPositiveFeedback(Math.round((good / total) * 100));
    }
  };
  const countTotalFeedback = () => {
    setTotal(total + 1);
  };

  const handleAddGoodReview = () => {
    console.log('Good was clicked');
    setGood(good + 1);
    countTotalFeedback();
    countPositiveFeedback();
  };
  const handleAddNeutralReview = () => {
    console.log('Neutral was clicked');
    setNeutral(neutral + 1);
    countTotalFeedback();
    countPositiveFeedback();
  };
  const handleAddBadReview = () => {
    console.log('Bad was clicked');
    setBad(bad + 1);
    countTotalFeedback();
    countPositiveFeedback();
  };

  return (
    <div>
      <Section variant="section" title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={[
            handleAddGoodReview,
            handleAddNeutralReview,
            handleAddBadReview,
          ]}
        />
        <h2>Statistics</h2>
        {total === 0 ? (
          <Notification variant="notification">
            There is no feedback.
          </Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    </div>
  );
};

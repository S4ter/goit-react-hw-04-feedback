import React, { Component } from 'react';

import { FeedbackOptions } from './feedbackoptions/FeedbackOptions';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';
import { Notification } from 'components/notification/Notification';
const options = ['Good', 'Neutral', 'Bad'];

export class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positiveFeedback: 0,
    };
  }

  countPositiveFeedback = () => {
    if (this.state.total === 0) {
      return 0;
    } else {
      this.setState({
        positiveFeedback: Math.round(
          (this.state.good / this.state.total) * 100
        ),
      });
    }
  };
  countTotalFeedback = () => {
    this.setState({ total: this.state.total + 1 });
  };

  handleAddGoodReview = () => {
    console.log('Good was clicked');
    this.setState({ good: this.state.good + 1 });
    this.countTotalFeedback();
    this.countPositiveFeedback();
  };
  handleAddNeutralReview = () => {
    console.log('Neutral was clicked');
    this.setState({
      neutral: this.state.neutral + 1,
    });
    this.countTotalFeedback();
    this.countPositiveFeedback();
  };
  handleAddBadReview = () => {
    console.log('Bad was clicked');
    this.setState({ bad: this.state.bad + 1 });
    this.countTotalFeedback();
    this.countPositiveFeedback();
  };

  render() {
    return (
      <div>
        <Section variant="section" title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={[
              this.handleAddGoodReview,
              this.handleAddNeutralReview,
              this.handleAddBadReview,
            ]}
          />
          <h2>Statistics</h2>
          {this.state.total === 0 ? (
            <Notification variant="notification">
              There is no feedback
            </Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positiveFeedback}
            />
          )}
        </Section>
      </div>
    );
  }
}

import React from "react";
import Controls from "./Controls";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState({ good: this.state.good + 1 });
  };
  neutralIncrement = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  badIncrement = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedback();

    return (
      <div>
        <h1>Please leave feedback</h1>

        <Controls
          onIncrement={this.goodIncrement}
          onNeutralIncrement={this.neutralIncrement}
          onBadIncrement={this.badIncrement}
        />

        <Section>
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              onGood={good}
              onNeutral={neutral}
              onBad={bad}
              onTotalFeedback={totalFeedback}
              onPositivePercentage={positivePercentage}
            />
          )}
        </Section>

        {/* <Statistics
          onGood={good}
          onNeutral={neutral}
          onBad={bad}
          onTotalFeedback={totalFeedback}
          onPositivePercentage={positivePercentage}
        /> */}

        {/* <div>
          <button onClick={this.goodIncrement} type="button">
            Good
          </button>
          <button onClick={this.neutralIncrement} type="button">
            Neutral
          </button>
          <button onClick={this.badIncrement} type="button">
            Bad
          </button>
        </div> */}

        {/* <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {}</p>
        </div>   */}
      </div>
    );
  }
}

export default Counter;

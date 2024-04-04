import React from "react";
import PropTypes from "prop-types";

function Statistics({
  onGood,
  onNeutral,
  onBad,
  onTotalFeedback,
  onPositivePercentage,
}) {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {onGood}</p>
      <p>Neutral: {onNeutral}</p>
      <p>Bad: {onBad}</p>
      <p>Total: {onTotalFeedback}</p>
      <p>Positive feedback: {onPositivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  onGood: PropTypes.number,
  onNeutral: PropTypes.number,
  onBad: PropTypes.number,
  onTotalFeedback: PropTypes.number,
  onPositivePercentage: PropTypes.number,
};

export default Statistics;

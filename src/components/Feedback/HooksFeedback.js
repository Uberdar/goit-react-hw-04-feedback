import PropTypes from 'prop-types';
import { useState } from 'react';
import x from './FeedbackStyle.module.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodChange = () => {
    setGood(prevState => prevState + 1);
  };
  const handleNeutralChange = () => {
    setNeutral(prevState => prevState + 1);
  };
  const handleBadChange = () => {
    setBad(prevState => prevState + 1);
  };
  const handleCounterChange = () => {
    return good + bad + neutral;
  };
  const handlePercentageChange = () => {
    return Math.round((good * 100) / handleCounterChange());
  };
  return (
    <div className="main_div">
      <h1>Please leave feedback</h1>
      <div className="buttons_div">
        <button className="good_btn" onClick={handleGoodChange}>
          Good
        </button>
        <button className="neutral_btn" onClick={handleNeutralChange}>
          Neutral
        </button>
        <button className="bad_btn" onClick={handleBadChange}>
          Bad
        </button>
      </div>
      <h2>Statistics</h2>
      {handleCounterChange() > 0 ? (
        <div className="stats_div">
          <span className={x.good_val}>Good: {good}</span>
          <span className="neutral_val">Neutral: {neutral}</span>
          <span className="bad_val">Bad: {bad}</span>
          <span className="total_val">Total: {handleCounterChange()}</span>
          <span className="percents">
            Persentage:{' '}
            {handleCounterChange() > 0
              ? handlePercentageChange()
              : 'no data yet'}{' '}
            %
          </span>
        </div>
      ) : (
        <h2 className="title">No Stats Have Yet Been Given</h2>
      )}
    </div>
  );
}

Feedback.prototype = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import x from './FeedbackStyle.module.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [counter, setCounter] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleGoodChange = () => {
    setGood(prevState => prevState + 1);
  };
  const handleNeutralChange = () => {
    setNeutral(prevState => prevState + 1);
  };
  const handleBadChange = () => {
    setBad(prevState => prevState + 1);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCounterChange = () => {
    setCounter(good + bad + neutral);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePercentageChange = () => {
    setPercentage(Math.round((good * 100) / counter));
  };
  useEffect(() => {
    if (!good && !bad && !neutral) {
      return;
    }
    console.log('1'); //почему необходимы в зависимостях handleCounterChange и handlePercentageChange
    handleCounterChange();
    handlePercentageChange();
  }, [good, bad, neutral, handleCounterChange, handlePercentageChange]);
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
      {counter > 0 ? (
        <div className="stats_div">
          <span className={x.good_val}>Good: {good}</span>
          <span className="neutral_val">Neutral: {neutral}</span>
          <span className="bad_val">Bad: {bad}</span>
          <span className="total_val">Total: {counter}</span>
          <span className="percents">
            Persentage: {counter > 0 ? percentage : 'no data yet'} %
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
  counter: PropTypes.number,
  percentage: PropTypes.number,
};

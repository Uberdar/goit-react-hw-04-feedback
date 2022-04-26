import React from 'react';
import x from './FeedbackStyle.module.css';
class Feedback extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    counter: 0,
    percentage: 0,
  };

  handleGoodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        counter: prevState.counter + 1,
        percentage: this.showPercentage(),
      };
    });
  };
  handleNeutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        counter: prevState.counter + 1,
        percentage: this.showPercentage(),
      };
    });
  };
  handleBadIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        counter: prevState.counter + 1,
        percentage: this.showPercentage(),
      };
    });
  };
  counterChange = () => {
    this.setState(prevState => {
      return {
        counter: this.state.bad + this.state.neutral + this.state.good,
      };
    });
  };
  showPercentage = () => {
    let x = Math.round((this.state.good * 100) / this.state.counter);
    // this.setState(prevState => {
    //   return {
    //     percentage: x,
    //   };
    // });
    return x;
  };

  render() {
    return (
      <div className="main_div">
        <h1>Please leave feedback</h1>
        <div className="buttons_div">
          <button className="good_btn" onClick={this.handleGoodIncrement}>
            Good
          </button>
          <button className="neutral_btn" onClick={this.handleNeutralIncrement}>
            Neutral
          </button>
          <button className="bad_btn" onClick={this.handleBadIncrement}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        {this.state.counter > 0 ? (
          <div className="stats_div">
            <span className={x.good_val}>Good: {this.state.good}</span>
            <span className="neutral_val">Neutral: {this.state.neutral}</span>
            <span className="bad_val">Bad: {this.state.bad}</span>
            <span className="total_val">Total: {this.state.counter}</span>
            <span className="percents">
              Persentage:{' '}
              {this.state.counter > 0 ? this.showPercentage() : 'no data yet'} %
            </span>
          </div>
        ) : (
          <h2 className="title">No Stats Have Yet Been Given</h2>
        )}
      </div>
    );
  }
}

export default Feedback;

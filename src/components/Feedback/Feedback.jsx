import css from './Feedback.module.css';
const Feedback = ({  feedbacks, totalFeedback, percentPositive,}) => {
  const { good, neutral, bad } = feedbacks;

  return (
    <div className={css.feedbackWrap}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {percentPositive}%</p>
    </div>
  );
}
export default Feedback;
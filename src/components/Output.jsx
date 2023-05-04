const Output = ({ years, months, days }) => {
  return (
    <section>
      <div className="date">
        <span>{years}</span>
        <big>year(s)</big>
      </div>
      <div className="date">
        <span>{months}</span>
        <big>months</big>
      </div>
      <div className="date">
        <span>{days}</span>
        <big>days</big>
      </div>
    </section>
  )
}
export default Output

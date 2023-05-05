const Output = ({ years, months, days }) => {
  const hasValues = years !== '' && months !== '' && days !== ''

  return (
    <section>
      <div className="date">
        <span>{years ? years : '--'}</span>
        <big>year(s)</big>
      </div>
      <div className="date">
        <span>{months ? months : '--'}</span>
        <big>month(s)</big>
      </div>
      <div className="date">
        <span>{days ? days : '--'}</span>
        <big>day(s)</big>
      </div>
    </section>
  )
}
export default Output

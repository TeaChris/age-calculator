import arrow from '../assets/icon-arrow.svg'

const Inputs = ({ days, setDays, months, setMonths, years, setYears }) => {
  const handleDaysChange = (e) => {
    const inputDays = e.target.value
    if (inputDays > 31) {
      document.getElementById('day-error').innerText = 'Cannot be more than 31'
    } else {
      document.getElementById('day-error').innerText = ''
      setDays(inputDays)
    }
  }

  const handleMonthsChange = (e) => {
    const inputMonths = e.target.value
    if (inputMonths > 12) {
      document.getElementById('month-error').innerText =
        'Cannot be more than 12'
    } else {
      document.getElementById('month-error').innerText = ''
      setMonths(inputMonths)
    }
  }

  const handleYearsChange = (e) => {
    const inputYears = e.target.value
    if (inputYears > 2023) {
      document.getElementById('year-error').innerText =
        'cannot be more than 2023'
    } else {
      document.getElementById('year-error').innerText = ''
      setYears(inputYears)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <article>
          <label htmlFor="day" className={`${days > 31 && 'text-rose'}`}>
            day
          </label>
          <input
            type="number"
            name="day"
            id="day"
            placeholder="DD"
            min="1"
            // max="31"
            value={days}
            onChange={handleDaysChange}
            minLength="1"
            maxLength="2"
            required
          />
          <p id="day-error" className="input-error"></p>
        </article>
        <article>
          <label htmlFor="day">month</label>
          <input
            type="number"
            name="month"
            id="month"
            placeholder="MM"
            min="1"
            max="12"
            value={months}
            onChange={handleMonthsChange}
            minLength="2"
            maxLength="2"
            required
          />
          <p id="month-error" className="input-error"></p>
        </article>
        <article>
          <label htmlFor="day">year</label>
          <input
            type="number"
            name="year"
            id="year"
            placeholder="YY"
            min="1900"
            max="2023"
            value={years}
            onChange={handleYearsChange}
            required
          />
          <p id="year-error" className="input-error"></p>
        </article>
      </div>
      <div className="underlineIcon">
        <div className="underline"></div>
        <button type="submit">
          <img src={arrow} alt="" />
        </button>
      </div>
    </form>
  )
}
export default Inputs

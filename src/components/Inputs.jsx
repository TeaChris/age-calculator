import { differenceInDays } from 'date-fns'
import arrow from '../assets/icon-arrow.svg'

const Inputs = ({ days, setDays, months, setMonths, years, setYears }) => {
  return (
    <form action="">
      <div className="inputs">
        <article>
          <label htmlFor="day">day</label>
          <input
            type="number"
            name="day"
            id="day"
            placeholder="DD"
            min="1"
            max="31"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            minLength="1"
            maxLength="2"
            required
          />
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
            onChange={(e) => setMonths(e.target.value)}
            required
          />
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
            onChange={(e) => setYears(e.target.value)}
            required
          />
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

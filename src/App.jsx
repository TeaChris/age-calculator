import { useState } from 'react'

import './App.css'
import Inputs from './components/Inputs'
import Output from './components/Output'

const App = () => {
  const [days, setDays] = useState('')
  const [months, setMonths] = useState('')
  const [years, setYears] = useState('')

  const date = new Date()

  const birthDate = new Date(years, months - 1, days)

  const ageInMilliseconds = date.getTime() - birthDate.getTime()
  const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24)
  const ageInYears = Math.floor(ageInDays / 365)
  const ageInMonths = Math.floor((ageInDays % 365) / 30)
  const ageInDaysLeft = Math.floor((ageInDays % 365) % 30)

  return (
    <div className="app">
      <Inputs
        days={days}
        setDays={setDays}
        months={months}
        setMonths={setMonths}
        years={years}
        setYears={setYears}
      />
      <Output years={ageInYears} months={ageInMonths} days={ageInDaysLeft} />
    </div>
  )
}
export default App

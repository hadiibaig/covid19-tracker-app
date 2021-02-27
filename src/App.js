import React, { useState, useEffect } from 'react'
import Charts from './components/Charts'
import Cards from './components/Cards'
import Header from './components/Header'
import Countries from './components/Countries';
import { fetchData } from './components/api'

function App() {
  const [statedata, setStateData] = useState({})
  const [country, setCountry] = useState("")

  useEffect(() => {
    const fetchedData = async () => {
      const { confirmed, recovered, deaths, lastUpdate } = await fetchData()
      setStateData({ confirmed: confirmed.value, recovered: recovered.value, deaths: deaths.value, lastUpdate })
    }
    fetchedData()
  }, [])

  const handleCountry = async (country) => {
    console.log(country)
    const { confirmed, recovered, deaths, lastUpdate } = await fetchData(country)
    setCountry(country)
    setStateData({ confirmed: confirmed.value, recovered: recovered.value, deaths: deaths.value, lastUpdate })
  }
  console.log(statedata.confirmed)
  return (<div>
    <Header />
    <Cards data={statedata} />
    <Countries handleCountry={handleCountry} />
    <Charts country={country} data={statedata} />
  </div>
  );
}

export default App;
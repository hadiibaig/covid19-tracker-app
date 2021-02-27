import axios from 'axios'

const URL = "https://covid19.mathdro.id/api"
export const fetchData = async (country) => {
    let alteredURL = URL
    if (country) {
        alteredURL = `${URL}/countries/${country}`
    }
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(alteredURL)
    return { confirmed, recovered, deaths, lastUpdate }
}
export const fetchChartData = async () => {
    const { data } = await axios.get("https://api.covidtracking.com/v1/us/daily.json")
    return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }))
}
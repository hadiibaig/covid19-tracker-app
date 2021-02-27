import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { fetchChartData } from './api'

const Charts = ({ country, data: { confirmed, deaths, recovered } }) => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        const chartsDatafunc = async () => {
            const modifiedData = await fetchChartData()
            setChartData(modifiedData)
        }
        chartsDatafunc()
    }, [])

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed, recovered, deaths],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) : (<h4>Loading ...</h4>)
    );

    const lineChart = (
        chartData.length ? <Line
            data={{
                labels: chartData.map(({ date }) => new Date(date).toLocaleDateString()).reverse(),
                datasets: [{
                    data: chartData.map((data) => data.confirmed).reverse(),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: chartData.map((data) => data.deaths).reverse(),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }, {
                    data: chartData.map((data) => data.recovered).reverse(),
                    label: 'Recovered',
                    borderColor: 'green',
                    backgroundColor: 'rgba(0, 255, 0, 0.5)',
                    fill: true,
                },
                ],
            }}
        /> : (<h4>Loading ...</h4>))
    return (
        <div>
            { country ? barChart : lineChart}
        </div>
    )
}

export default Charts

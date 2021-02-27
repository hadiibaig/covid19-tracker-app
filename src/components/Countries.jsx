import React, { useEffect, useState } from 'react';
import "./../App.css"
import axios from 'axios'
import { NativeSelect, FormControl } from '@material-ui/core'

export default function Countries({ handleCountry }) {
    const [countriesState, setcountriesState] = useState([])
    const url = "https://covid19.mathdro.id/api/countries"
    useEffect(() => {
        const fetchData = async () => {
            const { data: { countries } } = await axios.get(url)
            setcountriesState(countries)
        }
        fetchData();
    }, [setcountriesState])


    return (<div id="countries">
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleCountry(e.target.value)}>
                <option value="Global">Global</option>
                {
                    countriesState.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)
                }
            </NativeSelect>
        </FormControl>
    </div>)
}



import React from 'react'
import {v4 as uuidv4} from "uuid"
import { Country } from './Country'
import style from './css/Countries.css';

export const Countries = (props) => {
    return (
    <div className='countries'>

        {
            props.countries && props.countries.map((country) => {
                const newCountry = {country, id:uuidv4()}
                return (<Country {...newCountry} key={newCountry.id} removeCountry={props.removeCountry}/>)
            })
        }
    </div>
  )
}

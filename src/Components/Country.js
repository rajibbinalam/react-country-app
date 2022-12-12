import React from 'react'
import style from './css/Country.css';

export const Country = (props) => {
    const {country} = props;
    const {name,flags,capital,population,area} = country;

    const handleRemove = (c_name) => {
        props.removeCountry(c_name)
    }
  return (
    <article className='country'>
        <div className=''>
            <button className='remove-item btn' onClick={()=>handleRemove(name.common)}>+</button>
            <img src={flags.png} alt={name.common} className='flag' />
            <h3>Name : {name.official}</h3>
            <h5>Population : {population}</h5>
            <h5>Capital : {capital}</h5>
            <h5>Area : {area}</h5>

        </div>
    </article>
  )
}

import React,{useState, useEffect} from 'react'

const Search = (props) => {

    const [SearchText, setSearchText] = useState('')

    const handleChange = (query) => {
      // console.log(query);
      setSearchText(query);
      props.onSearch(query);
    }

    // useEffect(() => {

    // }, [handleChange])


  return (
    <div style={{textAlign:"center"}}>
        <input type='search' placeholder='Enter Something' onChange={e => handleChange(e.target.value)} value={SearchText}/>
    </div>
  )
}

export default Search
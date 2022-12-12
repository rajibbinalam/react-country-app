import React,{useState, useEffect} from 'react'

const Search = (props) => {

    const [SearchText, setSearchText] = useState('')

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
      props.onSearch(SearchText);
    }, [handleChange])
    

  return (
    <div style={{textAling:"center"}}>
        <input type='search' placeholder='Enter Something' onChange={handleChange} value={SearchText}/>
    </div>
  )
}

export default Search
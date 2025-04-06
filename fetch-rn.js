import { useEffect } from 'react';

const App = () => {
  const initAsync = async () => {
    //seems to work with others but failing with google maps
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?sessiontoken=${sessionToken}&input=${text.replace(/\s+/g,"+")}&key=${this.API_KEY}&limit=10${t}&language=en`)
    const json = await response.json()
    console.log(json)
  }
  useEffect(()=>{
    initAsync()
  },[])
  return null
}

export default App

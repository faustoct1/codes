import { useEffect } from 'react';

const App = () => {
  const initAsync = async () => {
    //or replace for any other url to fetch
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${city.replace(/\s+/g,'+')}&utf8=&format=json&origin=*`)
    const json = await response.json()
    console.log(json)
  }
  useEffect(()=>{
    initAsync()
  },[])
  return null
}

export default App

import { useState, useEffect } from 'react'

export function useValue(initialValue) {
  console.log(initialValue)
  const [value, setValue] = useState(initialValue)
  return { value, onChange: (e) => setValue(e.target.value) }
}

export function useFetch(callback, params) {
  const [data, setData] = useState([])

  useEffect(() => {

    /*const fetchData = () => callback(params)
                              .then(response => setData(response.data))
                              .catch(error => console.error(error));
    */
   const fetchData = async () =>{      
      try{
        let response = await callback(params)
        setData(response.data)
      } catch(error){
        console.error(error)
      }
    }

    fetchData()
    
  }, [callback, params])

  return data
}
import {useState, useEffect} from 'react'

export function useValue(initialValue){
  console.log(initialValue)
  const[value, setValue] = useState(initialValue)
  return { value, onChange: (e)=> setValue(e.target.value)}
}

export function useFetch(myFunction,params){
  const [data, setData] = useState([])
  
  useEffect(()=>{
    async function fetchData(){
      try{
        let response = await myFunction(params)
        setData(response.data)
      } catch(error){
        console.error(error)
      }
    }

    fetchData()
  }, [myFunction, params])

  return data
}
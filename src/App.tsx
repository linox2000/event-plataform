import { gql } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"


const GET_LESSONS_QUERY = gql `
teacher{
  name,
  bio
}
`

function App() {
 useEffect(()=>{
  client.query({
   query: GET_LESSONS_QUERY,
  }).then(resp =>console.log(resp.data))
 },[])

  return (
    <h1 className="text-2xl " >
     Hello World
    </h1>
  )
}

export default App

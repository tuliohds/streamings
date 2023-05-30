"use client"; // This is a client component

import { useEffect, useState } from "react"
import { Http } from "../Http/api"
import Teste from "@/component/teste"

export default function Page() {
  const [streamingData, setData] = useState([])

  const get_streaming = async () => {
    try {
      const response = await Http.get('streamings')
      setData(response.data.data)
    } catch (Error) {
      console.log(Error)
    }
  }

  useEffect(() => {
    get_streaming()
  }, [])

  return (
      <div className="container p-3 vh-100">
        <Teste/>
        <h1>Calculo de gastos com Streaming</h1>
        {streamingData.map((streaming) => {
          return (
              <div key={streaming.attributes.streaming_id}>
                <p>{streaming.attributes.name}</p>
                <p>{streaming.attributes.description}</p>
              </div>
          )
        })}
      </div>

  )
}

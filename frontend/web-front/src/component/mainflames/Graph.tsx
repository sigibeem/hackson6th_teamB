import React, { useState } from 'react'
import axios, { AxiosInstance } from 'axios'

type Kurabeteminaika = {
    id: string
    title: String
    body: String
}

function Graph () {
    const [kurabeteminaikas, setKurabeteminaika] = useState<Kurabeteminaika[]>([])

    const getAPIData = async () => {
        let instance: AxiosInstance

        instance = axios.create({
            baseURL: 'http://localhost:8080',
        })

        try {
            const response = await instance.get('/api/')
            console.log(response?.data)
            const kurabeteminaikadata = response?.data as Kurabeteminaika[]
            setKurabeteminaika(kurabeteminaikadata)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            hello world!
            <button onClick={getAPIData}>click</button>
            {kurabeteminaikas.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Graph;


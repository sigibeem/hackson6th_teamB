import { useState } from 'react'
import axios, { AxiosInstance } from 'axios'
import GraphAreaSelectWeaponLeft from '../components/GraphPageComponents/GraphAreaSelectWeaponLeft'
import '../styles/menulist.css'
import { useLocation, useNavigate } from 'react-router-dom'
import GraphAreaSelectWeaponRight from '../components/GraphPageComponents/GraphAreaSelectWeaponRight'
import '../styles/index.css'
import ListItem from '../components/ListPageComponents/atoms/ListItem'

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
    const navigate = useNavigate()
    const handleNavigateList1 = () => {
        navigate('/weapons')
    }
    const handleNavigateList2 = () => {
        navigate('/weapons', {state: true})
    }

    const location = useLocation()
    const [selectWeapon1] = useState(location.state)

    const handleSelectPlayModeWeapon1 = () => {
        navigate('/totalling', {state: false})
    }

    return (
        <div>
            <ListItem />
            <button onClick={getAPIData}>click</button>
            {kurabeteminaikas.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
            {!selectWeapon1 ?
            <>
                <GraphAreaSelectWeaponRight />
                <ul>
                    <li className='textLink' onClick={handleSelectPlayModeWeapon1}>
                        よろしければ投票お願いします
                    </li>
                </ul>
            </>
            :
            <>
                <GraphAreaSelectWeaponLeft/>
            </>}

        </div>
    )
}

export default Graph;


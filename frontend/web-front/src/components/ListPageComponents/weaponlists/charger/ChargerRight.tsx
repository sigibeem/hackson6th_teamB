import { charger } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const ChargerRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: false})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {charger.map((chargers) => {
        return(
        <ul className='listitemsUlRight' key={chargers.id}>
          <li data-weapon={chargers.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {chargers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ChargerRight

import { charger } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Charger = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: true})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {charger.map((chargers) => {
        return(
        <ul className='listitemsUlLeft' key={chargers.id}>
          <li data-weapon={chargers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {chargers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Charger

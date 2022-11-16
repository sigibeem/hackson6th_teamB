import { maneuver } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Maneuver = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: true})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {maneuver.map((maneuvers) => {
        return(
        <ul className='listitemsUlLeft' key={maneuvers.id}>
          <li data-weapon={maneuvers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {maneuvers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Maneuver

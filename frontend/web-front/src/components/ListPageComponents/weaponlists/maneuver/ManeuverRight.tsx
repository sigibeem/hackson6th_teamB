import { maneuver } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const ManeuverRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: false})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {maneuver.map((maneuvers) => {
        return(
        <ul className='listitemsUlRight' key={maneuvers.id}>
          <li data-weapon={maneuvers.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {maneuvers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ManeuverRight

import { maneuver } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const ManeuverRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {maneuver.map((maneuvers) => {
        return(
        <ul className='listitemsUlRight' key={maneuvers.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {maneuvers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ManeuverRight

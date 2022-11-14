import { maneuver } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Maneuver = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {maneuver.map((maneuvers) => {
        return(
        <ul className='listitemsUlLeft' key={maneuvers.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {maneuvers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Maneuver

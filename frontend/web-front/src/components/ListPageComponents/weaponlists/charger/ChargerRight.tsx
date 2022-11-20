import { charger } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const ChargerRight = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: false})
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

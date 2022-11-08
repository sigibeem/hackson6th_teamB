import { charger } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const ChargerRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/weapons", {state: true})
  }
  return (
    <div>
      {charger.map((chargers) => {
        return(
        <ul className='listitemsUlRight' key={chargers.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {chargers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ChargerRight

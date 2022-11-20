import { charger } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Charger = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: true})
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

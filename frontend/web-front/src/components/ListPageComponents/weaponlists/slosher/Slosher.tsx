import { slosher } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const Slosher = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: true})

  }
  return (
    <div>
      {slosher.map((sloshers) => {
        return(
        <ul className='listitemsUlLeft' key={sloshers.id}>
          <li data-weapon={sloshers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {sloshers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Slosher

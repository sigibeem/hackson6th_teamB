import { slosher } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const SlosherRight = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {slosher.map((sloshers) => {
        return(
        <ul className='listitemsUlRight' key={sloshers.id}>
          <li data-weapon={sloshers.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {sloshers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default SlosherRight

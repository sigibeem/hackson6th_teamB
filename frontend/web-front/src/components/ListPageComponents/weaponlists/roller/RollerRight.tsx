import { roller } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const RollerRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {roller.map((rollers) => {
        return(
        <ul className='listitemsUlRight' key={rollers.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {rollers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default RollerRight

import { stringer } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const StringerRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {stringer.map((stringers) => {
        return(
        <ul className='listitemsUlRight' key={stringers.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {stringers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default StringerRight

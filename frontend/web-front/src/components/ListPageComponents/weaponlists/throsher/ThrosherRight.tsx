import { throsher } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const ThrosherRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/weapons", {state: true})
  }
  return (
    <div>
      {throsher.map((throshers) => {
        return(
        <ul className='listitemsUlRight' key={throshers.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {throshers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ThrosherRight

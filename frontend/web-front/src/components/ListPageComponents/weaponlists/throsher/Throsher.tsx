import { throsher } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Throsher = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {throsher.map((throshers) => {
        return(
        <ul className='listitemsUlLeft' key={throshers.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {throshers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Throsher

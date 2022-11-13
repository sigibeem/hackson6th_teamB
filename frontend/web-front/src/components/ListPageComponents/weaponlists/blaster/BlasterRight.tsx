import { blaster } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const BlasterRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {blaster.map((blasters) => {
        return(
        <ul className='listitemsUlRight' key={blasters.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {blasters.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default BlasterRight

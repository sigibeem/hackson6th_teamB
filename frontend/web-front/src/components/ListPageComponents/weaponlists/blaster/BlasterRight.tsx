import { blaster } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const BlasterRight = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {blaster.map((blasters) => {
        return(
        <ul className='listitemsUlRight' key={blasters.id}>
          <li data-weapon={blasters.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {blasters.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default BlasterRight

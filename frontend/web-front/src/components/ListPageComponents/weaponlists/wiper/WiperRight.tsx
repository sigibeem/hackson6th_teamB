import { wiper } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const WiperRight = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {wiper.map((wipers) => {
        return(
        <ul className='listitemsUlRight' key={wipers.id}>
          <li data-weapon={wipers.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {wipers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default WiperRight

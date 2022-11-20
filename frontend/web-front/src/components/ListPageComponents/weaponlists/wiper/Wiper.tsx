import { wiper } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Wiper = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {wiper.map((wipers) => {
        return(
        <ul className='listitemsUlLeft' key={wipers.id}>
          <li data-weapon={wipers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {wipers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Wiper

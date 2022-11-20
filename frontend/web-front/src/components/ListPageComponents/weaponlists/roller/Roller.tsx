import { roller } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Roller = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {roller.map((rollers) => {
        return(
        <ul className='listitemsUlLeft' key={rollers.id}>
          <li data-weapon={rollers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {rollers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Roller

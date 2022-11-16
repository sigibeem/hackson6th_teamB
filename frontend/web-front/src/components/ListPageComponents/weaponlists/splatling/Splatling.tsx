import { splatling } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Splatling = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {splatling.map((splatlings) => {
        return(
        <ul className='listitemsUlLeft' key={splatlings.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {splatlings.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Splatling

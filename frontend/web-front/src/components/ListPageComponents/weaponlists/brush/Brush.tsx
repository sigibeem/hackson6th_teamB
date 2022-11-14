import { brush } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Brush = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {brush.map((brushs) => {
        return(
        <ul className='listitemsUlLeft' key={brushs.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {brushs.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Brush

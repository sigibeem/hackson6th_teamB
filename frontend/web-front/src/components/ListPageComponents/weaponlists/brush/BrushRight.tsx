import { brush } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const BrushRight = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {brush.map((brushs) => {
        return(
        <ul className='listitemsUlRight' key={brushs.id}>
          <li data-weapon={brushs.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {brushs.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default BrushRight

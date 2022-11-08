import { brush } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const BrushRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/weapons", {state: true})
  }
  return (
    <div>
      {brush.map((brushs) => {
        return(
        <ul className='listitemsUlRight' key={brushs.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {brushs.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default BrushRight

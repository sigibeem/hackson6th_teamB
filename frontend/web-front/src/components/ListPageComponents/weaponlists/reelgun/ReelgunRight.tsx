import { reelgun } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const ReelgunRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {reelgun.map((reelguns) => {
        return(
        <ul className='listitemsUlRight' key={reelguns.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {reelguns.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ReelgunRight

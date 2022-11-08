import { reelgun } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const ReelgunRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/weapons", {state: true})
  }
  return (
    <div>
      {reelgun.map((reelguns) => {
        return(
        <ul className='listitemsUlRight' key={reelguns.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {reelguns.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ReelgunRight

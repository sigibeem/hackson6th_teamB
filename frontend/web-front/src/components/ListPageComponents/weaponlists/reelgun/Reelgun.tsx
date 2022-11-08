import { reelgun } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Reelgun = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {reelgun.map((reelguns) => {
        return(
        <ul className='listitemsUlLeft' key={reelguns.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {reelguns.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Reelgun

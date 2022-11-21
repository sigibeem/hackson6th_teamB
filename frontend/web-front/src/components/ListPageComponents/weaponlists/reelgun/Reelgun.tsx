import { reelgun } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const Reelgun = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {reelgun.map((reelguns) => {
        return(
        <ul className='listitemsUlLeft' key={reelguns.id}>
          <li data-weapon={reelguns.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {reelguns.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Reelgun

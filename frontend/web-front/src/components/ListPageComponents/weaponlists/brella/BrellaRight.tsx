import { brella } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const BrellaRight = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {brella.map((brellas) => {
        return(
        <ul className='listitemsUlRight' key={brellas.id}>
          <li data-weapon={brellas.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {brellas.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default BrellaRight

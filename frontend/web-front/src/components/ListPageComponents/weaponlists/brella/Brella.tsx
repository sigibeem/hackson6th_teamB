import { brella } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Brella = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {brella.map((brellas) => {
        return(
        <ul className='listitemsUlLeft' key={brellas.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {brellas.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Brella

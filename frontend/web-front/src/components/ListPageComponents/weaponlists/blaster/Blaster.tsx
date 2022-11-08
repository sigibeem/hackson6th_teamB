import { blaster } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Blaster = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {blaster.map((blasters) => {
        return(
        <ul className='listitemsUlLeft' key={blasters.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {blasters.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Blaster

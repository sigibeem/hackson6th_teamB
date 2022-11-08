import { roller } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Roller = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {roller.map((rollers) => {
        return(
        <ul className='listitemsUlLeft' key={rollers.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {rollers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Roller

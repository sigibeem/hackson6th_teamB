import { stringer } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Stringer = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {stringer.map((stringers) => {
        return(
        <ul className='listitemsUlLeft' key={stringers.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {stringers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Stringer

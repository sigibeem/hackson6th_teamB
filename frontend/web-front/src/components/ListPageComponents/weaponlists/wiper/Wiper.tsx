import { wiper } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Wiper = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/weapons", {state: true})
  }
  return (
    <div>
      {wiper.map((wipers) => {
        return(
        <ul className='listitemsUlLeft' key={wipers.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {wipers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Wiper

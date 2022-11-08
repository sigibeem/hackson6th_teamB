import { wiper } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const WiperRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/weapons", {state: true})
  }
  return (
    <div>
      {wiper.map((wipers) => {
        return(
        <ul className='listitemsUlRight' key={wipers.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {wipers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default WiperRight

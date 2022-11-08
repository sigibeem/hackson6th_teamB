import { shelter } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const ShelterRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/weapons", {state: true})
  }
  return (
    <div>
      {shelter.map((shelters) => {
        return(
        <ul className='listitemsUlRight' key={shelters.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {shelters.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ShelterRight

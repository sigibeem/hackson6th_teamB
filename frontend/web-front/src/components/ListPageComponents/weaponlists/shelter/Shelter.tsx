import { shelter } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Shelter = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: true})
  }
  return (
    <div>
      {shelter.map((shelters) => {
        return(
        <ul className='listitemsUlLeft' key={shelters.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {shelters.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Shelter

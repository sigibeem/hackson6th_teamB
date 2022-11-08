import { manuver } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Manuver = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/weapons", {state: true})
  }
  return (
    <div>
      {manuver.map((manuvers) => {
        return(
        <ul className='listitemsUlLeft' key={manuvers.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {manuvers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Manuver

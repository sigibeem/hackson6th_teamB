import { spinner } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Spinner = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/weapons", {state: true})
  }
  return (
    <div>
      {spinner.map((spinners) => {
        return(
        <ul className='listitemsUlLeft' key={spinners.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {spinners.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Spinner

import { spinner } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const SpinnerRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {spinner.map((spinners) => {
        return(
        <ul className='listitemsUlRight' key={spinners.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {spinners.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default SpinnerRight

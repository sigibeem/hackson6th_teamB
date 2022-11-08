import { manuver } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const ManuverRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {manuver.map((manuvers) => {
        return(
        <ul className='listitemsUlRight' key={manuvers.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {manuvers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ManuverRight

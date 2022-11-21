import { splatling } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const SplatlingRight = () => {
  const navigate = useNavigate()

  const handleClick = async() => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {splatling.map((splatlings) => {
        return(
        <ul className='listitemsUlRight' key={splatlings.id}>
          <li data-weapon={splatlings.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {splatlings.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default SplatlingRight

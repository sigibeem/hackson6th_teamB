import { throsher } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Throsher = () => {
  return (
    <div>
      {throsher.map((throshers) => {
        return(
        <ul className='listitemsUlLeft' key={throshers.id}>
          <li className='listitemsLiLeft'>
            {throshers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Throsher

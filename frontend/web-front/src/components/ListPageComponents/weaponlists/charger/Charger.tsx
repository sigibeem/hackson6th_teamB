import { charger } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Charger = () => {
  return (
    <div>
      {charger.map((chargers) => {
        return(
        <ul className='listitemsUlLeft' key={chargers.id}>
          <li className='listitemsLiLeft'>
            {chargers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Charger

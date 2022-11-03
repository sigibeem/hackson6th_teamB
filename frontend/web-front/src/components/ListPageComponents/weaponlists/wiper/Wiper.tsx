import { wiper } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Wiper = () => {
  return (
    <div>
      {wiper.map((wipers) => {
        return(
        <ul className='listitemsUlLeft' key={wipers.id}>
          <li className='listitemsLiLeft'>
            {wipers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Wiper

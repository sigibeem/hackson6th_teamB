import { roller } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Roller = () => {
  return (
    <div>
      {roller.map((rollers) => {
        return(
        <ul className='listitemsUlLeft' key={rollers.id}>
          <li className='listitemsLiLeft'>
            {rollers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Roller

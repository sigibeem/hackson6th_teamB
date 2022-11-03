import { stringer } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Stringer = () => {
  return (
    <div>
      {stringer.map((stringers) => {
        return(
        <ul className='listitemsUlLeft' key={stringers.id}>
          <li className='listitemsLiLeft'>
            {stringers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Stringer

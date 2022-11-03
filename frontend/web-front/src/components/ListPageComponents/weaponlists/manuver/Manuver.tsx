import { manuver } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Manuver = () => {
  return (
    <div>
      {manuver.map((manuvers) => {
        return(
        <ul className='listitemsUlLeft' key={manuvers.id}>
          <li className='listitemsLiLeft'>
            {manuvers.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Manuver

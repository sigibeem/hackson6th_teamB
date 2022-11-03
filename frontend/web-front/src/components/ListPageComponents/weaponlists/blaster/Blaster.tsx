import { blaster } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Blaster = () => {
  return (
    <div>
      {blaster.map((blasters) => {
        return(
        <ul className='listitemsUlLeft' key={blasters.id}>
          <li className='listitemsLiLeft'>
            {blasters.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Blaster

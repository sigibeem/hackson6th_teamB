import { shooter } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Shooter = () => {
  return (
    <div>
      {shooter.map((shooters) => {
        return(
        <ul className='listitemsUlLeft' key={shooters.id}>
          <li className='listitemsLiLeft'>
            {shooters.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Shooter

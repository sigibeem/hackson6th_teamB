import { shelter } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Shelter = () => {
  return (
    <div>
      {shelter.map((shelters) => {
        return(
        <ul className='listitemsUlLeft' key={shelters.id}>
          <li className='listitemsLiLeft'>
            {shelters.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Shelter

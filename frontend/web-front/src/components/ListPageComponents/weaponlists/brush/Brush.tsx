import { brush } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Brush = () => {
  return (
    <div>
      {brush.map((brushs) => {
        return(
        <ul className='listitemsUlLeft' key={brushs.id}>
          <li className='listitemsLiLeft'>
            {brushs.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Brush

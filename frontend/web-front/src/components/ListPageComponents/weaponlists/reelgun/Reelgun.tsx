import { reelgun } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Reelgun = () => {
  return (
    <div>
      {reelgun.map((reelguns) => {
        return(
        <ul className='listitemsUlLeft' key={reelguns.id}>
          <li className='listitemsLiLeft'>
            {reelguns.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Reelgun

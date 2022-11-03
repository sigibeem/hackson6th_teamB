import { spinner } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'

const Spinner = () => {
  return (
    <div>
      {spinner.map((spinners) => {
        return(
        <ul className='listitemsUlLeft' key={spinners.id}>
          <li className='listitemsLiLeft'>
            {spinners.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Spinner

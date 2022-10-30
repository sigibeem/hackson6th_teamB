import { Link, useNavigate } from "react-router-dom";
import { listitems_category } from './weaponListCategory';
import '../../styles/listpage/listitems.css'

const SellectWeapon2 = () => {
  return (
    <div>
      <br />
      {listitems_category.map((listitem_category) => {
        return(
          <ul className='listitemsUlRight' key={listitem_category.id}>          
            <Link to={listitem_category.url} style={{ textDecoration: 'none' }}><li className='listitemsLiRight'>
                <span className='listitemsImgRight'></span>
                  <span className='listitemsTextRight'>
                    {listitem_category.title}
                  </span>
               </li>
            </Link>
          </ul>
        )
      })}
    </div>
  )
}

export default SellectWeapon2

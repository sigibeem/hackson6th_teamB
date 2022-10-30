import { Link, useNavigate } from "react-router-dom";
import { listitems_category } from './weaponListCategory';
import '../../styles/listpage/listitems.css'

const SellectWeapon1 = () => {
  return (
    <div>
      <br />
      {listitems_category.map((listitem_category) => {
        return(
          <ul className='listitemsUlLeft' key={listitem_category.id}>          
            <Link to={listitem_category.url} style={{ textDecoration: 'none' }}><li className='listitemsLiLeft'>
                <span className='listitemsImgLeft'></span>
                  <span className='listitemsTextLeft'>
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

export default SellectWeapon1

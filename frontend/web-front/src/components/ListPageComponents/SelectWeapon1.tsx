import { Link } from "react-router-dom";
import { listitems_category } from './weaponListCategory';
import '../../styles/listpage/listitems.css'
import ListItem from "./atoms/ListItem";

const SelectWeapon1 = () => {
  return (
    <div>
      {listitems_category.map((listitem_category) => {
        return(
          <ul className='listitemsUlLeft' key={listitem_category.category_id}>          
            <Link to={listitem_category.url} style={{ textDecoration: 'none' }}><li className='listitemsLiLeft'>
                <img src={listitem_category.category_image} alt='' className='listitemsImg' />
                  <span className='listitemsTextLeft'>
                    {listitem_category.category_name}
                  </span>
               </li>
            </Link>
          </ul>
        )
      })}
    </div>
  )
}

export default SelectWeapon1

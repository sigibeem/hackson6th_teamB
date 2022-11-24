import { Link } from "react-router-dom";
import { listitems_category_right } from './weaponListCategory';
import '../../styles/listpage/listitems.css'
import ListItem2 from "./atoms/ListItem2";


const SelectWeapon2 = () => {
  return (
    <div>
      <ListItem2 />
      {listitems_category_right.map((listitem_category) => {
        return(
          <ul className='listitemsUlRight' key={listitem_category.category_id}>
            <Link to={listitem_category.url} style={{ textDecoration: 'none' }}><li className='listitemsLiRight'>
              <img src={listitem_category.category_image} alt='' className='listitemsImg' />
                  <span className='listitemsTextRight'>
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

export default SelectWeapon2

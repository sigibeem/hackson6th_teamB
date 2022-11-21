import { Link } from "react-router-dom";
import { listitems_category_right } from './weaponListCategory';
import '../../styles/listPage/listitems.css'

const SelectWeapon2 = () => {
  return (
    <div>
      <ul className='btnList'>
        <li className='listStyle'>
          <button className='btnDisabled' >list1</button>
        </li>
        <li className='listStyle'>
          <button className='btn' disabled={false}>list2</button>
        </li>
      </ul>
      <br />
      {listitems_category_right.map((listitem_category) => {
        return(
          <ul className='listitemsUlRight' key={listitem_category.category_id}>
            <Link to={listitem_category.url} style={{ textDecoration: 'none' }}><li className='listitemsLiRight'>
                <span className='listitemsImgRight'></span>
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

import { Link } from "react-router-dom";
import { listitems_category } from './weaponListCategory';
import '../../styles/listpage/listitems.css'

const SelectWeapon1 = () => {
  return (
    <div>
      <ul className='btnList'>
        <li className='listStyle'>
          <button className='btn' >list1</button>
          {/* onClick={handleClickSellectWeapon1} */}
        </li>
        <li className='listStyle'>
          <button className='btnDisabled' disabled={false}>list2</button>
        </li>
      </ul>
      <br />
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

import  { useState } from 'react'
import { useLocation } from 'react-router';
import ListItem from '../components/ListPageComponents/atoms/ListItem';
import ListItem2 from '../components/ListPageComponents/atoms/ListItem2';
import SelectWeapon1 from '../components/ListPageComponents/SelectWeapon1';
import SelectWeapon2 from '../components/ListPageComponents/SelectWeapon2';
import '../styles/menulist.css';

const Lists = () => {
  const location = useLocation()
  const [selectWeapon1, setSelectWeapon1] = useState(location.state)

  // 通過履歴を削除
  if(localStorage.getItem('passed') === 'true'){
    localStorage.setItem('passed','false');
  }

  return (
    <div>
      <div id="confiremationViewsArea">
        <div className="weapon1">
          1
        </div>
        <div className="weapon2">
          2
        </div>
        
      </div>
      { !selectWeapon1 ? 
      <>
          <ListItem />
          <SelectWeapon1 /> 
      </>
      : 
      <>
          <ListItem2 />
          <SelectWeapon2 />
      </>
 }
    </div>
  )
}

export default Lists

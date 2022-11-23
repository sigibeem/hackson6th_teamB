import categoryImgSh from '../../images/btnImages/weapon/shooter/wakaba.png'
import categoryImgRe from '../../images/btnImages/weapon/reelgun/bottle.png'

interface listitems_category {
  category_id: number;
  url: string;
  category_name: string;
  category_image: string;
  count: number
}

export const listitems_category: listitems_category[] =  [
  {
    category_id: 1,
    url: '/weapons/shooter',
    category_image: categoryImgSh,
    category_name: 'シューター',
    count: 14
  },{
    category_id: 2,
    url: '/weapons/charger',
    category_image: '',
    category_name: 'チャージャー',
    count: 7
  },{
    category_id: 3,
    url: '/weapons/blaster',
    category_image: '',
    category_name: 'ブラスター',
    count: 6
  },{
    category_id: 4,
    url: '/weapons/roller',
    category_image: '',
    category_name: 'ローラー',
    count: 4
  },{
    category_id: 5,
    url: '/weapons/brush',
    category_image: '',
    category_name: 'フデ',
    count: 2
  },{
    category_id: 6,
    url: '/weapons/slosher',
    category_image: '',
    category_name: 'スロッシャー',
    count: 5
  },{
    category_id: 7,
    url: '/weapons/splatling',
    category_image: '',
    category_name: 'スピナー',
    count: 5
  },{
    category_id: 8,
    url: '/weapons/maneuver',
    category_image: '',
    category_name: 'マニューバー',
    count: 5
  },{
    category_id: 9,
    url: '/weapons/brella',
    category_image: '',
    category_name: 'シェルター',
    count: 3
  },{
    category_id: 10,
    url: '/weapons/wiper',
    category_image: '',
    category_name: 'ワイパー',
    count: 2
  },{
    category_id: 11,
    url: '/weapons/stringer',
    category_image: '',
    category_name: 'ストリンガー',
    count: 2
  },{
    category_id: 12,
    url: '/weapons/reelgun',
    category_image: categoryImgRe,
    category_name: 'リールガン',
    count: 3
  }
]


export const listitems_category_right: listitems_category[] =  [
  {
    category_id: 1,
    url: '/weapons/shooter_list2',
    category_image: categoryImgSh,
    category_name: 'シューター',
    count: 14
  },{
    category_id: 2,
    url: '/weapons/charger_list2',
    category_image: '',
    category_name: 'チャージャー',
    count: 7
  },{
    category_id: 3,
    url: '/weapons/blaster_list2',
    category_image: '',
    category_name: 'ブラスター',
    count: 6
  },{
    category_id: 4,
    url: '/weapons/roller_list2',
    category_image: '',
    category_name: 'ローラー',
    count: 4
  },{
    category_id: 5,
    url: '/weapons/brush_list2',
    category_image: '',
    category_name: 'フデ',
    count: 2
  },{
    category_id: 6,
    url: '/weapons/slosher_list2',
    category_image: '',
    category_name: 'スロッシャー',
    count: 5
  },{
    category_id: 7,
    url: '/weapons/splatling_list2',
    category_image: '',
    category_name: 'スピナー',
    count: 5
  },{
    category_id: 8,
    url: '/weapons/maneuver_list2',
    category_image: '',
    category_name: 'マニューバー',
    count: 5
  },{
    category_id: 9,
    url: '/weapons/brella_list2',
    category_image: '',
    category_name: 'シェルター',
    count: 3
  },{
    category_id: 10,
    url: '/weapons/wiper_list2',
    category_image: '',
    category_name: 'ワイパー',
    count: 2
  },{
    category_id: 11,
    url: '/weapons/stringer_list2',
    category_image: '',
    category_name: 'ストリンガー',
    count: 2
  },{
    category_id: 12,
    url: '/weapons/reelgun_list2',
    category_image: categoryImgRe,
    category_name: 'リールガン',
    count: 3
  }
]


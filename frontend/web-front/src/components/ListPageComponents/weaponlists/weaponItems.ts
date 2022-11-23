//shooterItem
import wakaba from '../../../images/btnImages/weapon/shooter/wakaba.png'
import hero from '../../../images/btnImages/weapon/shooter/hero.png'
import spra from '../../../images/btnImages/weapon/shooter/spra.png'
import proM from '../../../images/btnImages/weapon/shooter/proM.png'
import nzap from '../../../images/btnImages/weapon/shooter/nzap.png'
import prime from '../../../images/btnImages/weapon/shooter/prime.png'
import bold from '../../../images/btnImages/weapon/shooter/bold.png'
import gal52 from '../../../images/btnImages/weapon/shooter/gal52.png'
import jetSw from '../../../images/btnImages/weapon/shooter/jetSw.png'
import sharpM from '../../../images/btnImages/weapon/shooter/sharpM.png'
import g96 from '../../../images/btnImages/weapon/shooter/g96.png'

//reelgun
import L3 from '../../../images/btnImages/weapon/reelgun/l3.png'
import H3 from '../../../images/btnImages/weapon/reelgun/h3.png'
import bottle from '../../../images/btnImages/weapon/reelgun/bottle.png'

export const shooter = [
  {
    id: 1,
    image: wakaba,
    display_name: 'わかばシューター',
    weapon_name: 'wakaba',
    output: 'wakabaSh',
    range: 35,
    damage: 25,
    fire_rate: 75,
    sub: {
      sub_id: 1,
      sub_name: 'スプラッシュボム'
    },
    special: {
      special_id: 2,
      special_name: 'グレードバリア'
    }
  },{
    id: 2,
    image: hero,
    display_name: 'ヒーローシューターレプリカ',
    weapon_name: 'heroshooter_replica',
    output: 'heroRep',
    range: 50,
    damage: 33,
    fire_rate: 60,
    sub: {
      sub_id: 3,
      sub_name: 'キューバンボム'
    },
    special: {
      special_id: 1,
      special_name: 'ウルトラショット'
    }
  },{
    id: 3,
    image: spra,
    display_name: 'スプラシューター',
    weapon_name: 'sshooter',
    output: 'spraSh',
    range: 50,
    damage: 33,
    fire_rate: 60,
    sub: {
      sub_id: 3,
      sub_name: 'キューバンボム'
    },
    special: {
      special_id: 1,
      special_name: 'ウルトラショット'
    }
  },{
    id: 4,
    image: proM,
    display_name: 'プロモデラーMG',
    weapon_name: 'promodeler_mg',
    output: 'proModelMg',
    range: 35,
    damage: 20,
    fire_rate: 90,
    sub: {
      sub_id: 2,
      sub_name: 'タンサンボム'
    },
    special: {
      special_id: 8,
      special_name: 'サメライド'
    }
  },{
    id: 5,
    image: nzap,
    display_name: 'N-ZAP85',
    weapon_name: 'nzap85',
    output: 'nZ85',
    range: 50,
    damage: 25,
    fire_rate: 80,
    sub: {
      sub_id: 3,
      sub_name: 'キューバンボム'
    },
    special: {
      special_id: 10,
      special_name: 'エナジースタンド'
    }
  },{
    id: 6,
    image: prime,
    display_name: 'プライムシューター',
    weapon_name: 'prime',
    output: 'primeSh',
    range: 70,
    damage: 33,
    fire_rate: 30,
    sub: {
      sub_id: 14,
      sub_name: 'ラインマーカー'
    },
    special: {
      special_id: 7,
      special_name: 'カニタンク'
    }
  },{
    id: 7,
    image: bold,
    display_name: 'ボールドマーカー',
    weapon_name: 'bold',
    output: 'boldMk',
    range: 15,
    damage: 33,
    fire_rate: 80,
    sub: {
      sub_id: 7,
      sub_name: 'カーリングボム'
    },
    special: {
      special_id: 15,
      special_name: 'ウルトラハンコ'
    }
  },{
    id: 8,
    image: gal52,
    display_name: '52ガロン',
    weapon_name: '52gal',
    output: 'galon52',
    range: 55,
    damage: 50,
    fire_rate: 25,
    sub: {
      sub_id: 6,
      sub_name: 'スプラッシュシールド'
    },
    special: {
      special_id: 6,
      special_name: 'メガホンレーザー5.1ch'
    }
  },{
    id: 9,
    image: jetSw,
    display_name: 'ジェットスイーパー',
    weapon_name: 'jetsweeper',
    output: 'jetSwp',
    range: 80,
    damage: 25,
    fire_rate: 30,
    sub: {
      sub_id: 14,
      sub_name: 'ラインマーカー'
    },
    special: {
      special_id: 5,
      special_name: 'キューインキ'
    }
  },{
    id: 10,
    image: sharpM,
    display_name: 'シャープマーカー',
    weapon_name: 'sharp',
    output: 'sharpMk',
    range: 30,
    damage: 25,
    fire_rate: 80,
    sub: {
      sub_id: 4,
      sub_name: 'クイックボム'
    },
    special: {
      special_id: 7,
      special_name: 'カニタンク'
    }
  },{
    id: 11,
    image: g96,
    display_name: '96ガロン',
    weapon_name: '96gal',
    output: 'galon96',
    range: 65,
    damage: 100,
    fire_rate: 35,
    sub: {
      sub_id: 5,
      sub_name: 'スプリンクラー'
    },
    special: {
      special_id: 5,
      special_name: 'キューインキ'
    }
  }
]

export const reelgun = [
  {
    id: 1,
    image: L3,
    display_name: 'L3レールガン',
    weapon_name: 'l3reelgun',
    output: 'L3reelgun',
    range: 60,
    damage: 25,
    fire_rate: 65,
    sub: {
      sub_id: 7,
      sub_name: 'カーリングボム'
    },
    special: {
      special_id: 7,
      special_name: 'カニタンク'
    }
  },{
    id: 2,
    image: H3,
    display_name: 'H3レールガン',
    weapon_name: 'h3reelgun',
    output: 'H3reelgun',
    range: 70,
    damage: 33,
    fire_rate: 25,
    sub: {
      sub_id: 10,
      sub_name: 'ポイントセンサー'
    },
    special: {
      special_id: 10,
      special_name: 'エナジースタンド'
    }
  },{
    id: 3,
    image: bottle,
    display_name: 'ボトルガイザー',
    weapon_name: 'bottlegeyser',
    output: 'bottol',
    range: 85,
    damage: 33,
    fire_rate: 25,
    sub: {
      sub_id: 6,
      sub_name: 'スプラッシュシールド'
    },
    special: {
      special_id: 1,
      special_name: 'ウルトラショット'
    }
  }
]

export const charger = [
  {
    id: 1,
    image: 'images/weapon/charger/spraCh',
    display_name: 'スプラチャージャー',
    weapon_name: 'splatcharger',
    output: 'spraCh',
    range: 85,
    damage: 100,
    fire_rate: 45,
    sub: {
      sub_id: 1,
      sub_name: 'スプラッシュボム'
    },
    special: {
      special_id: 5,
      special_name: 'キューインキ'
    }
  }, {
    id: 2,
    image: 'images/weapon/charger/squicA',
    display_name: 'スクイックリンα',
    weapon_name: 'squiclean_a',
    output: 'squicA',
    range: 75,
    damage: 100,
    fire_rate: 70,
    sub: {
      sub_id: 10,
      sub_name: 'ポイントセンサー'
    },
    special: {
      special_id: 2,
      special_name: 'グレードバリア'
    }
  }, {
    id: 3,
    image: 'images/weapon/charger/spraScp',
    display_name: 'スプラスコープ',
    weapon_name: 'splatscope',
    output: 'spraScp',
    range: 90,
    damage: 100,
    fire_rate: 45,
    sub: {
      sub_id: 1,
      sub_name: 'スプラッシュボム'
    },
    special: {
      special_id: 5,
      special_name: 'キューインキ'
    }
  }, {
    id: 4,
    image: 'images/weapon/charger/lt4',
    display_name: 'リッター4K',
    weapon_name: 'liter4k',
    output: 'lt4',
    range: 95,
    damage: 100,
    fire_rate: 25,
    sub: {
      sub_id: 11,
      sub_name: 'トラップ'
    },
    special: {
      special_id: 4,
      special_name: 'ポップソナー'
    }
  }, {
    id: 5,
    image: 'images/weapon/charger/banb14',
    display_name: '14式竹筒銃・甲',
    weapon_name: 'bamboo14kou',
    output: 'banb14',
    range: 80,
    damage: 50,
    fire_rate: 80,
    sub: {
      sub_id: 8,
      sub_name: 'ロボットボム'
    },
    special: {
      special_id: 6,
      special_name: 'メガホンレーザー5.1ch'
    }
  }, {
    id: 6,
    image: 'images/weapon/charger/soi',
    display_name: 'ソイチューバー',
    weapon_name: 'soytuber',
    output: 'soi',
    range: 80,
    damage: 100,
    fire_rate: 65,
    sub: {
      sub_id: 13,
      sub_name: 'トーピード'
    },
    special: {
      special_id: 11,
      special_name: 'マルチミサイル'
    }
  }, {
    id: 7,
    image: 'images/weapon/charger/scp4k',
    display_name: '4Kスコープ',
    weapon_name: '4k_scope',
    output: 'scp4k',
    range: 100,
    damage: 100,
    fire_rate: 25,
    sub: {
      sub_id: 11,
      sub_name: 'トラップ'
    },
    special: {
      special_id: 4,
      special_name: 'ポップソナー'
    }
  }
]

export const blaster = [
  {
    id: 1,
    image: 'images/weapon/blaster/hotBr',
    display_name: 'ホットブラスター',
    weapon_name: 'hotblaster',
    output: 'hotBr',
    range: 30,
    damage: 100,
    fire_rate: 20,
    sub: {
      sub_id: 8,
      sub_name: 'ロボットボム'
    },
    special: {
      special_id: 2,
      special_name: 'グレードバリア'
    }
  },{
    id: 2,
    image: 'images/weapon/blaster/rapitBr',
    display_name: 'ラピッドブラスター',
    weapon_name: 'rapid',
    output: 'rapitBr',
    range: 55,
    damage: 50,
    fire_rate: 35,
    sub: {
      sub_id: 11,
      sub_name: 'トラップ'
    },
    special: {
      special_id: 9,
      special_name: 'トリプルトルネード'
    }
  },{
    id: 3,
    image: 'images/weapon/blaster/longBr',
    display_name: 'ロングブラスター',
    weapon_name: 'longblaster',
    output: 'longBr',
    range: 55,
    damage: 100,
    fire_rate: 15,
    sub: {
      sub_id: 3,
      sub_name: 'キューバンボム'
    },
    special: {
      special_id: 4,
      special_name: 'ポップソナー'
    }
  },{
    id: 4,
    image: 'images/weapon/blaster/novaBr',
    display_name: 'ノヴァブラスター',
    weapon_name: 'nova',
    output: 'novaBr',
    range: 20,
    damage: 100,
    fire_rate: 30,
    sub: {
      sub_id: 1,
      sub_name: 'スプラッシュボム'
    },
    special: {
      special_id: 3,
      special_name: 'ショックワンダー'
    }
  },{
    id: 5,
    image: 'images/weapon/blaster/crushBr',
    display_name: 'クラッシュブラスター',
    weapon_name: 'clashblaster',
    output: 'crushBr',
    range: 25,
    damage: 50,
    fire_rate: 65,
    sub: {
      sub_id: 1,
      sub_name: 'スプラッシュボム'
    },
    special: {
      special_id: 1,
      special_name: 'ウルトラショット'
    }
  },{
    id: 6,
    image: 'images/weapon/blaster/rBrE',
    display_name: 'Rブラスターエリート',
    weapon_name: 'rapid_elite',
    output: 'rBrE',
    range: 60,
    damage: 50,
    fire_rate: 30,
    sub: {
      sub_id: 12,
      sub_name: 'ポイズンミスト'
    },
    special: {
      special_id: 5,
      special_name: 'キューインキ'
    }
  }
]

export const roller = [
  {
    id: 1,
    image: 'images/weapon/roller/spraRl',
    display_name: 'スプラローラー',
    weapon_name: 'splatroller',
    output: 'spraRI',
    range: 45,
    damage: 100,
    fire_rate: 60,
    sub: {
      sub_id: 7,
      sub_name: 'カーリングボム'
    },
    special: {
      special_id: 2,
      special_name: 'グレードバリア'
    }
  },  {
    id: 2,
    image: 'images/weapon/roller/cbRl',
    display_name: 'カーボンローラー',
    weapon_name: 'carbon',
    output: 'cbRl',
    range: 25,
    damage: 100,
    fire_rate: 60,
    sub: {
      sub_id: 8,
      sub_name: 'ロボットボム'
    },
    special: {
      special_id: 3,
      special_name: 'ショックワンダー'
    }
  },{
    id: 3,
    image: 'images/weapon/roller/dinaRl',
    display_name: 'ダイナモローラー',
    weapon_name: 'dynamo',
    output: 'dinaRl',
    range: 75,
    damage: 100,
    fire_rate: 30,
    sub: {
      sub_id: 5,
      sub_name: 'スプリンクラー'
    },
    special: {
      special_id: 10,
      special_name: 'エナジースタンド'
    }
  },{
    id: 4,
    image: 'images/weapon/roller/vallRl',
    display_name: 'ヴァリアブルローラー',
    weapon_name: 'variableroller',
    output: 'vallRl',
    range: 60,
    damage: 100,
    fire_rate: 40,
    sub: {
      sub_id: 11,
      sub_name: 'トラップ'
    },
    special: {
      special_id: 11,
      special_name: 'マルチミサイル'
    }
  }
]

export const brush = [
  {
    id: 1,
    image: 'images/weapon/brush/hoku',
    display_name: 'ホクサイ',
    weapon_name: 'hokusai',
    output: 'hoku',
    range: 25,
    damage: 33,
    fire_rate: 75,
    sub: {
      sub_id: 3,
      sub_name: 'キューバンボム'
    },
    special: {
      special_id: 3,
      special_name: 'ショックワンダー'
    }
  },{
    id: 2,
    image: 'images/weapon/brush/pub',
    display_name: 'パブロ',
    weapon_name: 'pablo',
    output: 'pub',
    range: 10,
    damage: 25,
    fire_rate: 100,
    sub: {
      sub_id: 1,
      sub_name: 'スプラッシュボム'
    },
    special: {
      special_id: 6,
      special_name: 'メガホンレーザー5.1ch'
    }
  }
]

export const slosher = [
  {
    id: 1,
    image: 'images/weapon/slosher/buckTh',
    display_name: 'バケットスロッシャー',
    weapon_name: 'bucketslosher',
    output: 'buckTh',
    range: 55,
    damage: 50,
    fire_rate: 45,
    sub: {
      sub_id: 1,
      sub_name: 'スプラッシュボム'
    },
    special: {
      special_id: 9,
      special_name: 'トリプルトルネード'
    }
  },{
    id: 2,
    image: 'images/weapon/slosher/hissen',
    display_name: 'ヒッセン',
    weapon_name: 'hissen',
    output: 'hissen',
    range: 25,
    damage: 50,
    fire_rate: 70,
    sub: {
      sub_id: 12,
      sub_name: 'ポイズンミスト'
    },
    special: {
      special_id: 14,
      special_name: 'ジェットパック'
    }
  },{
    id: 3,
    image: 'images/weapon/slosher/screwTh',
    display_name: 'スクリュースロッシャー',
    weapon_name: 'screwslosher',
    output: 'screwTh',
    range: 65,
    damage: 50,
    fire_rate: 35,
    sub: {
      sub_id: 2,
      sub_name: 'タンサンボム'
    },
    special: {
      special_id: 13,
      special_name: 'ナイスダマ'
    }
  },{
    id: 4,
    image: 'images/weapon/slosher/overTh',
    display_name: 'オーバーフロッシャー',
    weapon_name: 'furo',
    output: 'overTh',
    range: 85,
    damage: 25,
    fire_rate: 45,
    sub: {
      sub_id: 5,
      sub_name: 'スプリンクラー'
    },
    special: {
      special_id: 12,
      special_name: 'アメフラシ'
    }
  },{
    id: 5,
    image: 'images/weapon/slosher/exTh',
    display_name: 'エクスプロッシャー',
    weapon_name: 'explosher',
    output: 'exTh',
    range: 75,
    damage: 50,
    fire_rate: 20,
    sub: {
      sub_id: 10,
      sub_name: 'ポイントセンサー'
    },
    special: {
      special_id: 12,
      special_name: 'アメフラシ'
    }
  }
]

export const splatling = [
  {
    id: 1,
    image: 'images/weapon/splatling/bullSp',
    display_name: 'バレルスピナー',
    weapon_name: 'barrelspinner',
    output: 'bullSp',
    range: 75,
    damage: 25,
    fire_rate: 100,
    sub: {
      sub_id: 5,
      sub_name: 'スプリンクラー'
    },
    special: {
      special_id: 4,
      special_name: 'ポップソナー'
    }
  },{
    id: 2,
    image: 'images/weapon/splatling/spraSp',
    weapon_name: 'スプラスピナー',
    output: 'spraSp',
    range: 60,
    damage: 25,
    fire_rate: 100,
    sub: {
      sub_id: 4,
      sub_name: 'クイックボム'
    },
    special: {
      special_id: 15,
      special_name: 'ウルトラハンコ'
    }
  },{
    id: 3,
    image: 'images/weapon/splatling/hyde',
    display_name: 'ハイドラント',
    weapon_name: 'hydra',
    output: 'hyde',
    range: 85,
    damage: 25,
    fire_rate: 100,
    sub: {
      sub_id: 8,
      sub_name: 'ロボットボム'
    },
    special: {
      special_id: 13,
      special_name: 'ナイスダマ'
    }
  },{
    id: 4,
    image: 'images/weapon/splatling/notila',
    display_name: 'ノーチラス47',
    weapon_name: 'nautilus47',
    output: 'notila',
    range: 75,
    damage: 25,
    fire_rate: 100,
    sub: {
      sub_id: 10,
      sub_name: 'ポイントセンサー'
    },
    special: {
      special_id: 12,
      special_name: 'アメフラシ'
    }
  },{
    id: 5,
    image: 'images/weapon/splatling/qoogel',
    display_name: 'クーゲルシュライバー',
    weapon_name: 'kugelschreiber',
    output: 'qoogel',
    range: 85,
    damage: 25,
    fire_rate: 100,
    sub: {
      sub_id: 2,
      sub_name: 'タンサンボム'
    },
    special: {
      special_id: 14,
      special_name: 'ジェットパック'
    }
  }
]

export const maneuver = [
  {
    id: 1,
    image: 'images/weapon/maneuver/spraMn',
    display_name: 'スプラマニューバー',
    weapon_name: 'maneuver',
    output: 'spraMn',
    range: 45,
    damage: 25,
    fire_rate: 30,
    sub: {
      sub_id: 3,
      sub_name: 'キューバンボム'
    },
    special: {
      special_id: 7,
      special_name: 'カニタンク'
    }
  },{
    id: 2,
    image: 'images/weapon/maneuver/dualSw',
    display_name: 'デュアルスイーパー',
    weapon_name: 'dualsweeper',
    output: 'dualSw',
    range: 70,
    damage: 25,
    fire_rate: 20,
    sub: {
      sub_id: 1,
      sub_name: 'スプラッシュボム'
    },
    special: {
      special_id: 4,
      special_name: 'ポップソナー'
    }
  },{
    id: 3,
    image: 'images/weapon/maneuver/spat',
    display_name: 'スパッタリー',
    weapon_name: 'sputtery',
    output: 'spat',
    range: 20,
    damage: 33,
    fire_rate: 45,
    sub: {
      sub_id: 9,
      sub_name: 'ジャンプビーコン'
    },
    special: {
      special_id: 10,
      special_name: 'エナジースタンド'
    }
  },{
    id: 4,
    image: 'images/weapon/maneuver/qHB',
    display_name: 'クアッドホッパーブラック',
    weapon_name: 'quadhopper_black',
    output: 'qHB',
    range: 55,
    damage: 25,
    fire_rate: 35,
    sub: {
      sub_id: 8,
      sub_name: 'ロボットボム'
    },
    special: {
      special_id: 8,
      special_name: 'サメライド'
    }
  },{
    id: 5,
    image: 'images/weapon/maneuver/kel525',
    display_name: 'ケルビン525',
    weapon_name: 'kelvin525',
    output: 'kel525',
    range: 65,
    damage: 50,
    fire_rate: 35,
    sub: {
      sub_id: 6,
      sub_name: 'スプラッシュシールド'
    },
    special: {
      special_id: 13,
      special_name: 'ナイスダマ'
    }
  }
]

export const brella = [
  {
    id: 1,
    image: 'images/weapon/brella/palaShel',
    display_name: 'パラシェルター',
    weapon_name: 'parashelter',
    output: 'palaShel',
    range: 40,
    damage: 50,
    fire_rate: 50,
    sub: {
      sub_id: 5,
      sub_name: 'スプリンクラー'
    },
    special: {
      special_id: 9,
      special_name: 'トリプルトルネード'
    }
  },{
    id: 2,
    image: 'images/weapon/brella/campShel',
    display_name: 'キャンピングシェルター',
    weapon_name: 'campingshelter',
    output: 'campShel',
    range: 65,
    damage: 100,
    fire_rate: 35,
    sub: {
      sub_id: 9,
      sub_name: 'ジャンプビーコン'
    },
    special: {
      special_id: 5,
      special_name: 'キューインキ'
    }
  },{
    id: 3,
    image: 'images/weapon/brella/spyGaj',
    display_name: 'スパイガジェット',
    weapon_name: 'spygadget',
    output: 'spyGaj',
    range: 35,
    damage: 33,
    fire_rate: 65,
    sub: {
      sub_id: 11,
      sub_name: 'トラップ'
    },
    special: {
      special_id: 8,
      special_name: 'サメライド'
    }
  }
]

export const wiper = [
  {
    id: 1,
    image: 'images/weapon/wiper/driveWi',
    display_name: 'ドライブワイパー',
    weapon_name: 'drivewiper',
    output: 'driveWi',
    range: 65,
    damage: 100,
    fire_rate: 20,
    sub: {
      sub_id: 13,
      sub_name: 'トーピード'
    },
    special: {
      special_id: 15,
      special_name: 'ウルトラハンコ'
    }
  },{
    id: 2,
    image: 'images/weapon/wiper/gymWi',
    display_name: 'ジムワイパー',
    weapon_name: 'gimwiper',
    output: 'gymWi',
    range: 80,
    damage: 100,
    fire_rate: 20,
    sub: {
      sub_id: 4,
      sub_name: 'クイックボム'
    },
    special: {
      special_id: 3,
      special_name: 'ショックワンダー'
    }
  }
]

export const stringer = [
  {
    id: 1,
    image: 'images/weapon/stringer/triStr',
    display_name: 'トライストリンガー',
    weapon_name: 'tristringer',
    output: 'triStr',
    range: 90,
    damage: 100,
    fire_rate: 40,
    sub: {
      sub_id: 12,
      sub_name: 'ポイズンミスト'
    },
    special: {
      special_id: 6,
      special_name: 'メガホンレーザー5.1ch'
    }
  },{
    id: 2,
    image: 'images/weapon/stringer/lact450',
    display_name: 'LACT450',
    weapon_name: 'lct450',
    output: 'lact450',
    range: 55,
    damage: 100,
    fire_rate: 75,
    sub: {
      sub_id: 7,
      sub_name: 'カーリングボム'
    },
    special: {
      special_id: 11,
      special_name: 'マルチミサイル'
    }
  }
]


// サブ
export const sub = [
  {
    sub_id: 1,
    sub_name: 'スプラッシュボム',
    count: 8
  },
  {
    sub_id: 2,
    sub_name: 'タンサンボム',
    count: 3
  },
  {
    sub_id: 3,
    sub_name: 'キューバンボム',
    count: 6
  },
  {
    sub_id: 4,
    sub_name: 'クイックボム',
    count: 3
  },
  {
    sub_id: 5,
    sub_name: 'スプリンクラー',
    count: 5
  },
  {
    sub_id: 6,
    sub_name: 'スプラッシュシールド',
    count: 3
  },
  {
    sub_id: 7,
    sub_name: 'カーリングボム',
    count: 4
  },
  {
    sub_id: 8,
    sub_name: 'ロボットボム',
    count: 5
  },
  {
    sub_id: 9,
    sub_name: 'ジャンプビーコン',
    count: 2
  },
  {
    sub_id: 10,
    sub_name: 'ポイントセンサー',
    count: 4
  },
  {
    sub_id: 11,
    sub_name: 'トラップ',
    count: 5
  },
  {
    sub_id: 12,
    sub_name: 'ポイズンミスト',
    count: 3
  },
  {
    sub_id: 13,
    sub_name: 'トーピード',
    count: 2
  },
  {
    sub_id: 14,
    sub_name: 'ラインマーカー',
    count: 2
  },
]

// スペシャル
export const special = [
  {
    special_id: 1,
    special_name: 'ウルトラショット',
    count: 4
  },{
    special_id: 2,
    special_name: 'グレードバリア',
    count: 4
  },{
    special_id: 3,
    special_name: 'ショックワンダー',
    count: 4
  },{
    special_id: 4,
    special_name: 'ポップソナー',
    count: 5
  },{
    special_id: 5,
    special_name: 'キューインキ',
    count: 6
  },{
    special_id: 6,
    special_name: 'メガホンレーザー5.1ch',
    count: 4
  },{
    special_id: 7,
    special_name: 'カニタンク',
    count: 4
  },{
    special_id: 8,
    special_name: 'サメライド',
    count: 3
  },{
    special_id: 9,
    special_name: 'トリプルトルネード',
    count: 3
  },{
    special_id: 10,
    special_name: 'エナジースタンド',
    count: 4
  },{
    special_id: 11,
    special_name: 'マルチミサイル',
    count: 3
  },{
    special_id: 12,
    special_name: 'アメフラシ',
    count: 3
  },{
    special_id: 13,
    special_name: 'ナイスダマ',
    count: 3
  },{
    special_id: 14,
    special_name: 'ジェットパック',
    count: 2
  },{
    special_id: 15,
    special_name: 'ウルトラハンコ',
    count: 3
  }
]

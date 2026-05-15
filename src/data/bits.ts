import { Bit } from '../types';

export const bits: Bit[] = [
  // ============ 攻擊型 ============
  { id: 'b-flat', name: 'Flat', nameEn: 'F', type: 'attack', description: '寬平面接觸，凹環結構，軌跡變化大。攻擊入門首選。', movement: '積極圓弧移動', xDashRating: 4, burstResistance: 3, tier: 3, bestFor: ['attack'], sources: ['BX-01 蒼龍神劍', 'BX-37 熊爪猛襲'] },
  { id: 'b-low-flat', name: 'Low Flat', nameEn: 'LF', type: 'attack', description: 'F軸矮1mm版本。極致攻擊但自爆風險高。', movement: '極度激進移動', xDashRating: 5, burstResistance: 3, tier: 3, bestFor: ['attack'], sources: ['BX-14 隨機強化組 Vol.1 (大獎鯊魚)'] },
  { id: 'b-rush', name: 'Rush', nameEn: 'R', type: 'attack', description: '平底縮小半徑＋10齒齒輪。耐久比 Flat 更佳。阿土天梯 T0。', movement: '激進直線衝刺', xDashRating: 5, burstResistance: 3, tier: 0, bestFor: ['attack'], sources: ['BX-20 蒼龍利刃套組 (鯊魚)', 'BX-31 隨機強化組 Vol.3'] },
  { id: 'b-low-rush', name: 'Low Rush', nameEn: 'LR', type: 'attack', description: 'R軸矮1mm版本。2025賽季最可靠攻擊軸心，世錦賽冠軍金/銀牌共用。', movement: '低位速度爆發＋曲線牽引', xDashRating: 5, burstResistance: 4, tier: 0, bestFor: ['attack'], sources: ['UX-11 衝擊龍神'] },
  { id: 'b-gear-flat', name: 'Gear Flat', nameEn: 'GF', type: 'attack', description: '帶齒輪的平面軸心，增強 Xtreme Dash 觸發效率。', movement: '圓弧移動＋齒輪加速', xDashRating: 5, burstResistance: 3, bestFor: ['attack'], sources: ['BX-23 鳳凰飛翼', 'BX-21 惡魔鎖鏈套組 (雄獅)', 'BX-00 聖劍神威'] },
  { id: 'b-accel', name: 'Accel', nameEn: 'A', type: 'attack', description: 'F軸基底＋16齒齒輪。極限衝擊力強。', movement: '受力後加速衝刺', xDashRating: 4, burstResistance: 3, tier: 3, bestFor: ['attack'], sources: ['UX-01 蒼龍爆刃'] },
  { id: 'b-cyclone', name: 'Cyclone', nameEn: 'C', type: 'attack', description: '螺旋攻擊路徑。', movement: '螺旋型攻擊路徑', xDashRating: 4, burstResistance: 3, bestFor: ['attack'], sources: ['BX-34 蒼穹龍騎士'] },
  { id: 'b-rubber-accel', name: 'Rubber Accel', nameEn: 'RA', type: 'attack', description: '橡膠材質加速軸心，抓地力極強。', movement: '高抓地力加速', xDashRating: 4, burstResistance: 3, tier: 3, bestFor: ['attack'], sources: ['BX-00 龍旋風暴 (25週年)', 'BX-00 暴風天馬 (25週年)'] },
  { id: 'b-vortex', name: 'Vortex', nameEn: 'V', type: 'attack', description: 'CX系列攻擊軸心，渦旋型移動。', movement: '渦旋型攻擊', xDashRating: 4, burstResistance: 3, bestFor: ['attack'], sources: ['CX-01 蒼龍勇氣', 'CX-00 戰神伏特'] },
  { id: 'b-gear-rush', name: 'Gear Rush', nameEn: 'GR', type: 'attack', description: '齒輪強化衝刺力。', movement: '齒輪強化衝刺', xDashRating: 5, burstResistance: 3, tier: 3, bestFor: ['attack'], sources: ['CX-06 隨機強化組 極狐九尾精選', 'CX-17 隨機強化組 Vol.10'] },
  { id: 'b-under-flat', name: 'Under Flat', nameEn: 'UF', type: 'attack', description: '低位平底。', movement: '極低位平面衝刺', xDashRating: 5, burstResistance: 3, tier: 2, bestFor: ['attack'], sources: ['UX-15 鮫鯊狂鱗套組'] },
  { id: 'b-free-flat', name: 'Free Flat', nameEn: 'FF', type: 'attack', description: '自由旋轉平面。', movement: '自由旋轉平面攻擊', xDashRating: 4, burstResistance: 3, bestFor: ['attack'], sources: ['BX-49 翔龍突擊'] },
  { id: 'b-ignition', name: 'Ignition', nameEn: 'I', type: 'attack', description: '一體式棘齒+軸心。16齒+環形結構，純攻擊型。', movement: '爆發式衝刺', xDashRating: 5, burstResistance: 4, tier: 2, bestFor: ['attack'], sources: ['CX-13 龍王閃擊', 'CX-16 入門衝刺組C'] },

  // ============ 持久型 ============
  { id: 'b-ball', name: 'Ball', nameEn: 'B', type: 'stamina', description: '公認最強泛用軸心！大球形底，支撐與迴避性佳。新手首選。', movement: '中心定點旋轉', xDashRating: 3, burstResistance: 2, tier: 1, bestFor: ['stamina', 'balance'], sources: ['BX-03 魔導幻箭', 'BX-08 3on3套組'] },
  { id: 'b-disc-ball', name: 'Disc Ball', nameEn: 'DB', type: 'stamina', description: '加環增加離心力的 Ball 強化版。', movement: '強化定點旋轉', xDashRating: 3, burstResistance: 2, tier: 5, bestFor: ['stamina'], sources: ['UX-03 魔導神杖 (原裝 5-70DB)', 'CX-10 銀狼狩獵'] },
  { id: 'b-orb', name: 'Orb', nameEn: 'O', type: 'stamina', description: '球形設計，移動性略高於 Ball。', movement: '受力平滑移動', xDashRating: 3, burstResistance: 2, tier: 2, bestFor: ['stamina'], sources: ['BX-16 隨機強化組 王蛇鞭尾精選'] },
  { id: 'b-gear-ball', name: 'Gear Ball', nameEn: 'GB', type: 'stamina', description: '球形＋齒輪 Xtreme Dash。', movement: '穩定旋轉＋齒輪加速', xDashRating: 4, burstResistance: 2, tier: 5, bestFor: ['stamina'], sources: ['BX-21 惡魔鎖鏈套組 (魔導幻箭)', 'BX-24 隨機強化組 Vol.2'] },
  { id: 'b-glide', name: 'Glide', nameEn: 'G', type: 'stamina', description: '滑翔型，極低摩擦。', movement: '極低摩擦滑翔', xDashRating: 2, burstResistance: 2, tier: 3, bestFor: ['stamina'], sources: ['UX-07 鳳凰尾翼套組'] },
  { id: 'b-free-ball', name: 'Free Ball', nameEn: 'FB', type: 'stamina', description: '平內齒B軸。減少極限衝擊消耗，競技常用。阿土天梯 T0。', movement: '底部球體自由轉動', xDashRating: 2, burstResistance: 2, tier: 0, bestFor: ['stamina'], sources: ['UX-08 霜輝銀狼'] },
  { id: 'b-low-orb', name: 'Low Orb', nameEn: 'LO', type: 'stamina', description: 'O軸矮1mm版本，更低重心持久。', movement: '低位穩定旋轉', xDashRating: 2, burstResistance: 2, tier: 1, bestFor: ['stamina'], sources: ['CX-02 魔導至尊'] },
  { id: 'b-wall-ball', name: 'Wall Ball', nameEn: 'WB', type: 'stamina', description: '圓柱壁防傾倒＋球底。', movement: '限制移動的穩定旋轉', xDashRating: 2, burstResistance: 3, tier: 4, bestFor: ['stamina', 'defense'], sources: ['CX-08 隨機強化組 Vol.7 (魔犬烈焰)'] },
  { id: 'b-yielding', name: 'Yielding', nameEn: 'Y', type: 'stamina', description: '柔順型，吸收衝擊。', movement: '柔順吸震旋轉', xDashRating: 2, burstResistance: 2, tier: 2, bestFor: ['stamina'], sources: ['CX-15 邪神狂怒'] },

  // ============ 防禦型 ============
  { id: 'b-needle', name: 'Needle', nameEn: 'N', type: 'defense', description: '尖錐底。受撞擊時自由移動閃避，維持傾斜防禦。', movement: '受撞擊自由滑動閃避', xDashRating: 2, burstResistance: 2, tier: 3, bestFor: ['defense'], sources: ['BX-04 騎士重盾 (原裝 3-80N)'] },
  { id: 'b-high-needle', name: 'High Needle', nameEn: 'HN', type: 'defense', description: '高位針尖，增加閃避距離。', movement: '高位閃避移動', xDashRating: 2, burstResistance: 2, tier: 2, bestFor: ['defense'], sources: ['BX-13 騎士長槍'] },
  { id: 'b-spike', name: 'Spike', nameEn: 'S', type: 'defense', description: '尖刺型，減少摩擦。', movement: '小範圍定點旋轉', xDashRating: 2, burstResistance: 2, tier: 4, bestFor: ['defense'], sources: ['BX-19 戰犀號角'] },
  { id: 'b-gear-needle', name: 'Gear Needle', nameEn: 'GN', type: 'defense', description: '齒輪針尖，防禦＋Xtreme Dash。', movement: '閃避＋齒輪加速', xDashRating: 3, burstResistance: 2, tier: 3, bestFor: ['defense'], sources: ['UX-06 雄獅巔峰', 'BX-00 岩獅獸王'] },
  { id: 'b-metal-needle', name: 'Metal Needle', nameEn: 'MN', type: 'defense', description: '金屬底尖，增加穩定性和重量。', movement: '金屬穩定閃避', xDashRating: 2, burstResistance: 2, bestFor: ['defense'], sources: ['隨機強化組'] },
  { id: 'b-dot', name: 'Dot', nameEn: 'D', type: 'defense', description: '極小接觸面，最低摩擦力。', movement: '極小點接觸旋轉', xDashRating: 2, burstResistance: 2, tier: 1, bestFor: ['defense'], sources: ['BX-35 隨機強化組 Vol.4 (龜甲堡壘)', 'BX-00 玄武聖盾'] },
  { id: 'b-bound-spike', name: 'Bound Spike', nameEn: 'BS', type: 'defense', description: '受撞擊後彈跳閃避。', movement: '彈跳閃避', xDashRating: 2, burstResistance: 2, bestFor: ['defense'], sources: ['UX-10 改造套組U (騎士鎧甲)', 'BX-44 三角強襲'] },
  { id: 'b-wedge', name: 'Wedge', nameEn: 'W', type: 'defense', description: '楔形設計，卡住對手減速。', movement: '楔形卡位防禦', xDashRating: 2, burstResistance: 3, tier: 1, bestFor: ['defense'], sources: ['CX-03 英仙幽冥', 'UX-18 隨機強化組 Vol.8'] },
  { id: 'b-under-needle', name: 'Under Needle', nameEn: 'UN', type: 'defense', description: '矮2mm尖底，極低重心防禦。競技持久防禦常用。', movement: '低位閃避防禦', xDashRating: 2, burstResistance: 2, bestFor: ['defense'], sources: ['UX-13 魔像奇岩', 'CX-14 騎士堡壘'] },
  { id: 'b-wall-wedge', name: 'Wall Wedge', nameEn: 'WW', type: 'defense', description: '壁楔型，寬面吸震＋楔形卡位。', movement: '寬面吸震＋楔形卡位', xDashRating: 2, burstResistance: 3, bestFor: ['defense'], sources: ['CX-12 鳳凰炎光'] },

  // ============ 平衡型 ============
  { id: 'b-taper', name: 'Taper', nameEn: 'T', type: 'balance', description: '錐形設計，攻防平衡基礎。', movement: '漸變摩擦', xDashRating: 2, burstResistance: 2, tier: 2, bestFor: ['balance'], sources: ['BX-02 惡魔紅鐮', 'BX-00 龍騎風暴'] },
  { id: 'b-high-taper', name: 'High Taper', nameEn: 'HT', type: 'balance', description: '高位錐體。', movement: '高位漸變旋轉', xDashRating: 2, burstResistance: 2, tier: 3, bestFor: ['balance', 'defense'], sources: ['BX-20 蒼龍利刃套組 (騎士)', 'BX-21 惡魔鎖鏈套組'] },
  { id: 'b-point', name: 'Point', nameEn: 'P', type: 'balance', description: '點觸型，精準控制旋轉軸心。', movement: '精準點觸控制', xDashRating: 3, burstResistance: 3, tier: 2, bestFor: ['balance'], sources: ['BX-15 雄獅獵爪', 'BX-00 猛虎斬擊'] },
  { id: 'b-gear-point', name: 'Gear Point', nameEn: 'GP', type: 'balance', description: '齒輪點觸。', movement: '點觸＋齒輪加速', xDashRating: 4, burstResistance: 3, tier: 4, bestFor: ['balance'], sources: ['BX-20 蒼龍利刃套組', 'BX-26 獨角刺心'] },
  { id: 'b-hexa', name: 'Hexa', nameEn: 'H', type: 'balance', description: '六角型底，自我修正。16齒齒輪專注 Xtreme Dash。世錦賽冠軍持久配置常用。阿土天梯 T0 第一名。', movement: '六角面切換移動方向', xDashRating: 4, burstResistance: 4, tier: 0, bestFor: ['balance', 'stamina'], sources: ['UX-02 惡魔戰槌', 'UX-19 子彈獅鷲'] },
  { id: 'b-level', name: 'Level', nameEn: 'L', type: 'balance', description: '三種不同底部高度，多段攻擊模式。終盤自動修正傾斜。世錦賽金牌空力天馬搭配。', movement: '多段模式切換', xDashRating: 3, burstResistance: 3, tier: 1, bestFor: ['balance'], sources: ['UX-09 武士星劍 (原裝 2-70L)'] },
  { id: 'b-unite', name: 'Unite', nameEn: 'U', type: 'balance', description: '聯合型，綜合多種移動模式。', movement: '多模式綜合移動', xDashRating: 3, burstResistance: 3, tier: 2, bestFor: ['balance'], sources: ['BX-33 皓戰猛虎'] },
  { id: 'b-elevate', name: 'Elevate', nameEn: 'E', type: 'balance', description: '升降型。世錦賽銀牌蒼穹龍騎士搭配此款。', movement: '動態高度變化', xDashRating: 3, burstResistance: 3, tier: 1, bestFor: ['balance'], sources: ['隨機強化組'] },
  { id: 'b-trans-point', name: 'Trans Point', nameEn: 'TP', type: 'balance', description: '變換點觸，切換攻防模式。', movement: '攻防模式切換', xDashRating: 3, burstResistance: 3, tier: 2, bestFor: ['balance'], sources: ['BX-38 赫燃天鳳'] },
  { id: 'b-kick', name: 'Kick', nameEn: 'K', type: 'balance', description: '踢擊型，終盤爆發反擊。', movement: '終盤踢擊反擊', xDashRating: 4, burstResistance: 3, tier: 1, bestFor: ['balance', 'attack'], sources: ['CX-05 隨機強化組 Vol.6 (惡魔獵魂)'] },
  { id: 'b-zap', name: 'Zap', nameEn: 'Z', type: 'balance', description: '電擊型，突發性加速。', movement: '突發電擊加速', xDashRating: 4, burstResistance: 3, bestFor: ['balance'], sources: ['UX-14 天蠍長矛'] },
  { id: 'b-merge', name: 'Merge', nameEn: 'M', type: 'balance', description: '融合型，多種性能合一。', movement: '融合多性能移動', xDashRating: 3, burstResistance: 3, tier: 5, bestFor: ['balance'], sources: ['BX-45 武士魂斬', 'BX-00 暴風天馬'] },
  { id: 'b-jolt', name: 'Jolt', nameEn: 'J', type: 'balance', description: '細平底＋16齒齒輪。持久佳且衝擊力強。阿土天梯 T1。', movement: '震盪移動', xDashRating: 4, burstResistance: 3, tier: 1, bestFor: ['balance'], sources: ['UX-17 隕星龍騎士'] },
  { id: 'b-trans-kick', name: 'Trans Kick', nameEn: 'TK', type: 'balance', description: '變換踢擊。', movement: '持久⇄攻擊模式切換', xDashRating: 4, burstResistance: 3, tier: 2, bestFor: ['balance'], sources: ['CX-09 焰神滅世'] },
  { id: 'b-gear-unite', name: 'Gear Unite', nameEn: 'GU', type: 'balance', description: '齒輪聯合。', movement: '綜合＋齒輪加速', xDashRating: 4, burstResistance: 3, bestFor: ['balance'], sources: ['CX-17 隨機強化組 Vol.10 (大獎獨角三角洲)'] },
  { id: 'b-operate', name: 'Operate', nameEn: 'Op', type: 'balance', description: '一體式棘齒+軸心的操控型。', movement: '一體式操控', xDashRating: 3, burstResistance: 4, bestFor: ['balance'], sources: ['CX-11 帝王威能套組'] },
];

export const getBitById = (id: string) => bits.find(b => b.id === id);

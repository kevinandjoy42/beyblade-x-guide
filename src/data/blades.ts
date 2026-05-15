import { Blade } from '../types';

export const blades: Blade[] = [
  // ================================================================
  //  BX 系列 (Basic Line)
  // ================================================================
  { id: 'bx-01', modelNumber: 'BX-01', nameZh: '蒼龍神劍', nameEn: 'Dran Sword', series: 'BX', type: 'attack', description: 'Beyblade X 初代主角機。鋒利劍型攻擊刃。', popularity: 3, tier: 3, tips: '入門攻擊型，外型帥但競技力中等。', recommendedCombos: [
    { ratchetId: 'r-3-60', bitId: 'b-flat', rating: 3, note: '原裝配置 3-60F' },
  ]},
  { id: 'bx-02', modelNumber: 'BX-02', nameZh: '惡魔紅鐮', nameEn: 'Hells Scythe', series: 'BX', type: 'balance', description: '鐮刀型平衡刃，外型獨特。', popularity: 3, tier: 4, tips: '平衡型入門。', recommendedCombos: [
    { ratchetId: 'r-4-60', bitId: 'b-taper', rating: 3, note: '原裝配置 4-60T' },
  ]},
  { id: 'bx-03', modelNumber: 'BX-03', nameZh: '魔導幻箭', nameEn: 'Wizard Arrow', series: 'BX', type: 'stamina', description: '初代持久型代表。箭型刃體減少空氣阻力。', popularity: 3, tier: 5, tips: '持久型入門款。', recommendedCombos: [
    { ratchetId: 'r-4-80', bitId: 'b-ball', rating: 3, note: '原裝配置 4-80B' },
  ]},
  { id: 'bx-04', modelNumber: 'BX-04', nameZh: '騎士重盾', nameEn: 'Knight Shield', series: 'BX', type: 'defense', description: '盾牌型防禦刃，經典防禦型代表。厚實刃體吸收撞擊。', popularity: 4, tier: 5, tips: '原裝 3-80N 已是經典強力防禦組合。', recommendedCombos: [
    { ratchetId: 'r-3-80', bitId: 'b-needle', rating: 5, note: '原裝配置 3-80N' },
  ]},
  { id: 'bx-13', modelNumber: 'BX-13', nameZh: '騎士長槍', nameEn: 'Knight Lance', series: 'BX', type: 'defense', description: '長槍型防禦刃，正面防禦力極強。', popularity: 3, tier: 3, tips: '正面防禦好，搭配 HN 軸心。', recommendedCombos: [
    { ratchetId: 'r-4-80', bitId: 'b-high-needle', rating: 4, note: '原裝配置 4-80HN' },
  ]},
  { id: 'bx-14-shark', modelNumber: 'BX-14', nameZh: '鮫鯊鋒鰭', nameEn: 'Shark Edge', series: 'BX', type: 'attack', description: '隨機強化組 Vol.1 大獎。鯊魚型攻擊刃，鋸齒狀撞擊面多段打擊。', popularity: 4, tier: 3, tips: '搭配 LF 衝刺力強。', recommendedCombos: [
    { ratchetId: 'r-3-60', bitId: 'b-low-flat', rating: 4, note: '大獎配置 3-60LF' },
  ]},
  { id: 'bx-15', modelNumber: 'BX-15', nameZh: '雄獅獵爪', nameEn: 'Leon Claw', series: 'BX', type: 'balance', description: '獅爪型平衡刃，外型霸氣。', popularity: 3, tier: 4, tips: '平衡型，搭配 Point 軸心。', recommendedCombos: [
    { ratchetId: 'r-5-60', bitId: 'b-point', rating: 3, note: '原裝配置 5-60P' },
  ]},
  { id: 'bx-16', modelNumber: 'BX-16', nameZh: '王蛇鞭尾', nameEn: 'Viper Tail', series: 'BX', type: 'stamina', description: '蛇型持久刃，隨機強化組精選款。流線型設計。', popularity: 3, tier: 4, tips: '持久型入門。', recommendedCombos: [
    { ratchetId: 'r-3-80', bitId: 'b-high-needle', rating: 3, note: '精選版配置' },
  ]},
  { id: 'bx-19', modelNumber: 'BX-19', nameZh: '戰犀號角', nameEn: 'Rhino Horn', series: 'BX', type: 'defense', description: '犀牛角型防禦刃，正面撞擊力優秀。', popularity: 3, tier: 4, tips: '正面防禦力強但側面較弱。', recommendedCombos: [
    { ratchetId: 'r-3-80', bitId: 'b-spike', rating: 3, note: '原裝配置 3-80S' },
  ]},
  { id: 'bx-20-dagger', modelNumber: 'BX-20', nameZh: '蒼龍利刃', nameEn: 'Dran Dagger', series: 'BX', type: 'attack', description: '蒼龍利刃套組主陀螺。完全偏重心設計，打誰都五五開。', popularity: 3, tier: 2, tips: '1-60 LR 是主流攻擊配置。已被鯊魚上位替代但仍具實力。', recommendedCombos: [
    { ratchetId: 'r-2-80', bitId: 'b-gear-point', rating: 3, note: '套組配置 2-80GP' },
    { ratchetId: 'r-1-60', bitId: 'b-low-rush', rating: 4, note: '主流攻擊配置，打誰都五五開', source: '白Shiro 賽場TOP10 (#6)' },
  ]},
  { id: 'bx-21-chain', modelNumber: 'BX-21', nameZh: '惡魔鎖鏈', nameEn: 'Hells Chain', series: 'BX', type: 'balance', description: '鎖鏈型平衡刃。套組主陀螺。', popularity: 3, tier: 4, tips: '平衡型，搭配 HT。', recommendedCombos: [
    { ratchetId: 'r-5-60', bitId: 'b-high-taper', rating: 3, note: '套組配置 5-60HT' },
  ]},
  { id: 'bx-23', modelNumber: 'BX-23', nameZh: '鳳凰飛翼', nameEn: 'Phoenix Wing', series: 'BX', type: 'attack', description: '萬年一線攻擊刃！初代紅鳳凰~38.0g，藍鳳凰再版38.6-39.1g（模具填平凹槽更重）。三枚厚重巨刃撞擊面寬廣，搭配極限加速可擊飛大部分對手。約50場後邊緣磨損。', popularity: 5, tier: 0, bbxScore: 41, tips: '藍鳳凰 > 紅鳳凰（更重、無掉漆問題）。7-60R 是台灣選手「奶油哥」亞洲盃配置。致命弱點：對左迴旋幾乎無抗性。', recommendedCombos: [
    { ratchetId: 'r-9-60', bitId: 'b-gear-flat', rating: 4, note: '原裝配置 9-60GF' },
    { ratchetId: 'r-7-60', bitId: 'b-rush', rating: 5, note: '台灣靈魂配！亞洲盃佳績，鳳凰重回巔峰的核心配法', source: '阿土最強改造 #13 (奶油哥配置)' },
    { ratchetId: 'r-7-60', bitId: 'b-low-rush', rating: 5, note: '低重心狙擊版，加強低位爆裂攻擊', source: '阿土最強改造 #13' },
  ]},
  { id: 'bx-24-wyvern', modelNumber: 'BX-24', nameZh: '翼蛇疾風', nameEn: 'Wyvern Gale', series: 'BX', type: 'stamina', description: '隨機強化組 Vol.2 大獎。飛龍型持久刃。', popularity: 3, tier: 4, tips: '搭配 GB 軸心。', recommendedCombos: [
    { ratchetId: 'r-5-70', bitId: 'b-gear-ball', rating: 4, note: '大獎配置 5-70GB' },
  ]},
  { id: 'bx-26', modelNumber: 'BX-26', nameZh: '獨角刺心', nameEn: 'Unicorn Sting', series: 'BX', type: 'balance', description: '獨角獸型平衡刃。獨角突刺搭配均衡性能。', popularity: 3, tier: 4, tips: '平衡型，搭配 GP 軸心。', recommendedCombos: [
    { ratchetId: 'r-5-60', bitId: 'b-gear-point', rating: 3, note: '原裝配置 5-60GP' },
  ]},
  { id: 'bx-27-sphinx', modelNumber: 'BX-27', nameZh: '幻神護甲', nameEn: 'Sphinx Cowl', series: 'BX', type: 'defense', description: '隨機強化組精選大獎。獅身人面型防禦刃。', popularity: 3, tier: 1, tips: '搶手隨機強化組款。', recommendedCombos: [] },
  { id: 'bx-31-tyranno', modelNumber: 'BX-31', nameZh: '暴龍猛擊', nameEn: 'Tyranno Beat', series: 'BX', type: 'attack', description: '隨機強化組 Vol.3 大獎。暴龍型攻擊刃，猛烈撞擊。', popularity: 3, tier: 2, bbxScore: 36, tips: '搭配 Rush 軸心。', recommendedCombos: [
    { ratchetId: 'r-3-70', bitId: 'b-rush', rating: 4, note: '大獎配置 3-70R' },
  ]},
  { id: 'bx-33', modelNumber: 'BX-33', nameZh: '皓戰猛虎', nameEn: 'Vise Tiger', series: 'BX', type: 'balance', description: '猛虎型平衡刃。虎爪形狀的撞擊面。', popularity: 3, tier: 4, tips: '平衡型，搭配 Unite 軸心。', recommendedCombos: [
    { ratchetId: 'r-3-60', bitId: 'b-unite', rating: 3, note: '原裝配置 3-60U' },
  ]},
  { id: 'bx-34', modelNumber: 'BX-34', nameZh: '蒼穹龍騎士', nameEn: 'Cobalt Dragoon', series: 'BX', type: 'attack', description: '龍騎型攻擊刃，Cyclone 軸心帶來螺旋攻擊路徑。致敬經典 Dragoon。阿土稱為「奇蹟陀螺」。', popularity: 4, tier: 1, bbxScore: 53, tips: '有 Legacy 回憶加成的帥氣陀螺。1-60FB 兼顧持久與反擊。', recommendedCombos: [
    { ratchetId: 'r-2-60', bitId: 'b-cyclone', rating: 3, note: '原裝配置 2-60C' },
    { ratchetId: 'r-1-60', bitId: 'b-free-ball', rating: 4, note: '奇蹟配置，兼顧持久與反擊', source: '阿土低預算指南 (G2冠軍)' },
    { ratchetId: 'r-9-60', bitId: 'b-level', rating: 5, note: '左迴旋競技配置，E軸或L軸尾數轉贏', source: '白Shiro 賽場TOP10 (#7)' },
  ]},
  { id: 'bx-35-turtle', modelNumber: 'BX-35', nameZh: '龜甲堡壘', nameEn: 'Turtle Shelter', series: 'BX', type: 'defense', description: '隨機強化組 Vol.4 大獎。龜殼型防禦刃。', popularity: 3, tier: 4, tips: '搭配 Dot 軸心。', recommendedCombos: [
    { ratchetId: 'r-9-80', bitId: 'b-dot', rating: 4, note: '大獎配置 9-80D' },
  ]},
  { id: 'bx-36-whale', modelNumber: 'BX-36', nameZh: '巨鯨怒濤', nameEn: 'Whale Wave', series: 'BX', type: 'stamina', description: '隨機強化組精選。鯨魚型持久刃，重量級。', popularity: 3, tier: 2, tips: '重量級持久型。', recommendedCombos: [
    { ratchetId: 'r-5-80', bitId: 'b-ball', rating: 4, note: '精選配置 5-80B' },
  ]},
  { id: 'bx-37-bear', modelNumber: 'BX-37', nameZh: '熊爪猛襲', nameEn: 'Bear Scratch', series: 'BX', type: 'attack', description: '雙重極限競技場組附屬。熊爪型攻擊。', popularity: 2, tier: 5, tips: '附屬於競技場套組。', recommendedCombos: [
    { ratchetId: 'r-5-60', bitId: 'b-flat', rating: 3, note: '套組配置 5-60F' },
  ]},
  { id: 'bx-38', modelNumber: 'BX-38', nameZh: '赫燃天鳳', nameEn: 'Crimson Garuda', series: 'BX', type: 'balance', description: '赤紅迦樓羅型平衡刃。Trans Point 軸心可切換攻防模式。', popularity: 3, tier: 4, tips: '平衡型，TP軸心有模式切換特色。', recommendedCombos: [
    { ratchetId: 'r-4-70', bitId: 'b-trans-point', rating: 3, note: '原裝配置 4-70TP' },
  ]},
  { id: 'bx-39-drake', modelNumber: 'BX-39', nameZh: '護城龍神', nameEn: 'Shelter Drake', series: 'BX', type: 'defense', description: '隨機強化組精選。守護龍型防禦刃。', popularity: 3, tier: 4, tips: '防禦型，隨機強化組出品。', recommendedCombos: [] },
  { id: 'bx-44', modelNumber: 'BX-44', nameZh: '三角強襲', nameEn: 'Tricera Press', series: 'BX', type: 'defense', description: '三角龍型防禦刃。搭載金屬 M-85 特殊棘齒，重量極重。', popularity: 3, tier: 4, tips: 'M-85 金屬棘齒很特殊。', recommendedCombos: [
    { ratchetId: 'r-M-85', bitId: 'b-bound-spike', rating: 4, note: '原裝配置 M-85BS' },
  ]},
  { id: 'bx-45', modelNumber: 'BX-45', nameZh: '武士魂斬', nameEn: 'Samurai Calibur', series: 'BX', type: 'balance', description: '武士刀型平衡刃。Merge 軸心融合多種性能。', popularity: 3, tier: 4, tips: '平衡型，搭配 Merge 軸心。', recommendedCombos: [
    { ratchetId: 'r-6-70', bitId: 'b-merge', rating: 3, note: '原裝配置 6-70M' },
  ]},
  { id: 'bx-49', modelNumber: 'BX-49', nameZh: '翔龍突擊', nameEn: 'Dran Strike', series: 'BX', type: 'attack', description: '2026年5月最新款！翔龍系列攻擊刃。搭載全新 4-50 超低棘齒 + Free Flat 軸心。', popularity: 4, tier: 3, tips: '最新款攻擊型，4-50 超低重心。', recommendedCombos: [
    { ratchetId: 'r-4-50', bitId: 'b-free-flat', rating: 4, note: '原裝配置 4-50FF' },
  ]},

  // ================================================================
  //  UX 系列 (Unique Line)
  // ================================================================
  { id: 'ux-01', modelNumber: 'UX-01', nameZh: '蒼龍爆刃', nameEn: 'Dran Buster', series: 'UX', type: 'attack', description: 'UX 系列首發攻擊型。Accel 軸心受撞擊後加速。', popularity: 3, tier: 1, tips: 'UX 攻擊入門款。', recommendedCombos: [
    { ratchetId: 'r-1-60', bitId: 'b-accel', rating: 3, note: '原裝配置 1-60A' },
    { ratchetId: 'r-4-50', bitId: 'b-level', rating: 5, note: '低重心極致攻擊，不易爆裂', source: '阿土入坑指南 (G2冠軍)' },
  ]},
  { id: 'ux-02', modelNumber: 'UX-02', nameZh: '惡魔戰槌', nameEn: "Hell's Hammer", series: 'UX', type: 'balance', description: '重錘型平衡刃。重量配置均勻，攻守兼備。', popularity: 4, tier: 2, tips: '平衡型入門推薦。原裝 3-70H 已是穩定配置。', recommendedCombos: [
    { ratchetId: 'r-3-70', bitId: 'b-hexa', rating: 4, note: '原裝配置 3-70H' },
  ]},
  { id: 'ux-03', modelNumber: 'UX-03', nameZh: '魔導神杖', nameEn: 'Wizard Rod', series: 'UX', type: 'balance', description: '史上最強平衡型！曾因太強被禁賽（2025/4-10月）。世錦賽冠軍配置。', popularity: 5, tier: 0, bbxScore: 90, tips: '有「賽場毒瘤」之稱。如果只買一顆，買這顆。', recommendedCombos: [
    { ratchetId: 'r-5-70', bitId: 'b-disc-ball', rating: 4, note: '原裝配置 5-70DB' },
    { ratchetId: 'r-1-60', bitId: 'b-hexa', rating: 5, note: '世錦賽冠軍配置', source: '2025 Beyblade X 世界錦標賽金牌' },
    { ratchetId: 'r-9-70', bitId: 'b-hexa', rating: 5, note: '世錦賽銀牌配置', source: '2025 Beyblade X 世界錦標賽銀牌' },
  ]},
  { id: 'ux-06', modelNumber: 'UX-06', nameZh: '雄獅巔峰', nameEn: 'Leon Crest', series: 'UX', type: 'defense', description: '獅冠型防禦刃。Gear Needle 軸心結合防禦和 Xtreme Dash。', popularity: 3, tier: 5, tips: '防禦＋Xtreme Dash 的獨特組合。', recommendedCombos: [
    { ratchetId: 'r-7-60', bitId: 'b-gear-needle', rating: 4, note: '原裝配置 7-60GN' },
  ]},
  { id: 'ux-08', modelNumber: 'UX-08', nameZh: '霜輝銀狼', nameEn: 'Silver Wolf', series: 'UX', type: 'stamina', description: '銀狼型持久刃。Free Ball 軸心提供極致持久力。雙刃結構極難被敲出去。', popularity: 3, tier: 1, bbxScore: 44, tips: '持久型推薦，原裝就很強。3-60FB 是頂規耐力配。', recommendedCombos: [
    { ratchetId: 'r-3-80', bitId: 'b-free-ball', rating: 4, note: '原裝配置 3-80FB' },
    { ratchetId: 'r-3-60', bitId: 'b-free-ball', rating: 5, note: '頂規耐力配，新手入坑穩定盾牌', source: '阿土低預算指南 (G2冠軍)' },
    { ratchetId: 'r-3-60', bitId: 'b-low-orb', rating: 4, note: '首款抵銷環，換棘齒即可上場', source: '白Shiro 賽場TOP10 (#4)' },
  ]},
  { id: 'ux-09', modelNumber: 'UX-09', nameZh: '武士星劍', nameEn: 'Samurai Saber', series: 'UX', type: 'balance', description: '武士刀型平衡刃。鋒利撞擊面 + Level 軸心終盤修正。', popularity: 5, tier: 1, bbxScore: 40, tips: '頂級攻擊型。社群公認最強攻擊組合之一。', recommendedCombos: [
    { ratchetId: 'r-2-70', bitId: 'b-level', rating: 3, note: '原裝配置 2-70L' },
    { ratchetId: 'r-9-60', bitId: 'b-low-rush', rating: 5, note: '社群公認最強攻擊組合', source: 'BeyBase 社群排行' },
  ]},
  { id: 'ux-11', modelNumber: 'UX-11', nameZh: '衝擊龍神', nameEn: 'Impact Drake', series: 'UX', type: 'attack', description: '龍型攻擊刃，撞擊力極強。原裝 9-60LR 已經很強。阿土推薦必買（為了旋風發射器＋9-60＋LR）。', popularity: 4, tier: 2, tips: '攻擊型入門推薦，原裝配置就是強力攻擊組合。必買套組。', recommendedCombos: [
    { ratchetId: 'r-9-60', bitId: 'b-low-rush', rating: 5, note: '原裝配置 9-60LR' },
  ]},
  { id: 'ux-12-ghost', modelNumber: 'UX-12', nameZh: '幽靈迴旋', nameEn: 'Ghost Circle', series: 'UX', type: 'stamina', description: '隨機強化組 Vol.5 大獎。幽靈型持久刃。', popularity: 3, tier: 3, tips: '持久型，隨機強化組出品。', recommendedCombos: [] },
  { id: 'ux-13', modelNumber: 'UX-13', nameZh: '魔像奇岩', nameEn: 'Golem Rock', series: 'UX', type: 'defense', description: '岩石魔像型防禦刃。Under Needle 極致低重心防禦。', popularity: 3, tier: 2, bbxScore: 31, tips: '防禦型，搭配 UN 軸心。', recommendedCombos: [
    { ratchetId: 'r-1-60', bitId: 'b-under-needle', rating: 4, note: '原裝配置 1-60UN' },
    { ratchetId: 'r-1-60', bitId: 'b-low-rush', rating: 4, note: '攻擊型防禦配置，綠色版改版後很兇', source: '阿土入坑指南 (G2冠軍)' },
  ]},
  { id: 'ux-14', modelNumber: 'UX-14', nameZh: '天蠍長矛', nameEn: 'Scorpio Spear', series: 'UX', type: 'balance', description: '天蠍型平衡刃。搭載全新 0-70 零邊數棘齒 + Zap 軸心。', popularity: 3, tier: 2, bbxScore: 33, tips: '0-70 棘齒很特殊，零邊數設計。', recommendedCombos: [
    { ratchetId: 'r-0-70', bitId: 'b-zap', rating: 3, note: '原裝配置 0-70Z' },
  ]},
  { id: 'ux-15-shark', modelNumber: 'UX-15', nameZh: '鮫鯊狂鱗', nameEn: 'Shark Scale', series: 'UX', type: 'attack', description: 'Shark Edge 進化版套組。鯊魚鱗片型攻擊，世錦賽級攻擊刃。', popularity: 5, tier: 0, bbxScore: 92, tips: '3-60LR 為世錦賽金牌攻擊配置。', recommendedCombos: [
    { ratchetId: 'r-3-60', bitId: 'b-under-flat', rating: 3, note: '套組配置 3-60UF' },
    { ratchetId: 'r-3-60', bitId: 'b-low-rush', rating: 5, note: '世錦賽金牌攻擊配置', source: '2025 Beyblade X 世界錦標賽金牌' },
    { ratchetId: 'r-1-60', bitId: 'b-low-rush', rating: 5, note: '極致爆裂攻擊，上鉤刃鑽入對手下方切爆', source: '白Shiro 賽場TOP10 (#3)' },
  ]},
  { id: 'ux-16-clock', modelNumber: 'UX-16', nameZh: '時鐘幻象', nameEn: 'Clock Mirage', series: 'UX', type: 'stamina', description: '時鐘型持久刃。4-55+UN 超低重心防禦配置可扛住鯊魚猛攻並轉贏神杖。實測中爆冷門擋下版本最強。', popularity: 4, tier: 2, bbxScore: 34, tips: '4-55 UN 大幅降低爆裂風險。怕被擊飛出界但持久力驚人。', recommendedCombos: [
    { ratchetId: 'r-4-55', bitId: 'b-under-needle', rating: 5, note: '超低重心防禦，實測扛住鯊魚並轉贏神杖', source: '維辰孔丘 三月TOP5 (#4，實測冠軍)' },
  ] },
  { id: 'ux-17', modelNumber: 'UX-17', nameZh: '隕星龍騎士', nameEn: 'Meteor Dragoon', series: 'UX', type: 'balance', description: '隕石龍騎型平衡刃。Jolt 軸心帶來震盪移動。致敬經典 Dragoon。左迴旋攻擊型。', popularity: 4, tier: 0, bbxScore: 52, tips: '致敬初代 Dragoon，左迴旋設計。搭配 Level 或 Elevate 軸心表現優異。', recommendedCombos: [
    { ratchetId: 'r-3-70', bitId: 'b-jolt', rating: 3, note: '原裝配置 3-70J' },
    { ratchetId: 'r-5-70', bitId: 'b-level', rating: 4, note: '社群推薦持久攻擊配置', source: 'HackMD 繁中社群紀錄 (@liangyutw)' },
    { ratchetId: 'r-9-60', bitId: 'b-level', rating: 4, note: '高防爆裂攻擊配置', source: 'HackMD 繁中社群紀錄 (@liangyutw)' },
    { ratchetId: 'r-3-70', bitId: 'b-level', rating: 4, note: '新手友好低預算配置，吸收與反擊能力優秀', source: '阿土低預算指南 (G2冠軍)' },
  ]},
  { id: 'ux-18-mummy', modelNumber: 'UX-18', nameZh: '木乃伊詛咒', nameEn: 'Mummy Curse', series: 'UX', type: 'defense', description: '隨機強化組 Vol.8。木乃伊型防禦刃。', popularity: 2, tier: 1, bbxScore: 34, tips: '冷門防禦型。', recommendedCombos: [] },
  { id: 'ux-19', modelNumber: 'UX-19', nameZh: '子彈獅鷲', nameEn: 'Bullet Gryphon', series: 'UX', type: 'balance', description: '2026年4月最新UX！獅鷲型平衡刃。', popularity: 3, tier: 1, tips: '最新 UX 系列平衡型。', recommendedCombos: [] },

  // ================================================================
  //  CX 系列 (Custom Line) — 5件式可拆卸戰刃
  // ================================================================
  { id: 'cx-01', modelNumber: 'CX-01', nameZh: '蒼龍勇氣', nameEn: 'Dran Brave', series: 'CX', type: 'attack', description: 'CX 首發攻擊型。搭載首個金屬章（Samurai Crest），重量極限。CX 持久流終極答案。', popularity: 4, tier: 1, bbxScore: 38, tips: '金屬章系統 + W輔助戰能緩衝所有攻擊。賽場 #1 配置。', recommendedCombos: [
    { ratchetId: 'r-6-60', bitId: 'b-vortex', rating: 3, note: '原裝配置 S6-60V' },
    { ratchetId: 'r-9-60', bitId: 'b-wedge', rating: 5, note: '當前賽場 #1 配置！CX持久流終極答案', source: '白Shiro 賽場TOP10 (#1)' },
    { ratchetId: 'r-7-60', bitId: 'b-hexa', rating: 5, note: 'H軸解決頭重腳輕問題', source: '白Shiro 賽場TOP10 (#1)' },
  ]},
  { id: 'cx-02', modelNumber: 'CX-02', nameZh: '魔導至尊', nameEn: 'Wizard Arc', series: 'CX', type: 'stamina', description: 'Wizard Rod 的 CX 進化版。Round Assist Blade + Low Orb 軸心。', popularity: 4, tier: 3, tips: '繼承 Wizard Rod 血統的持久型。', recommendedCombos: [
    { ratchetId: 'r-4-55', bitId: 'b-low-orb', rating: 3, note: '原裝配置 R4-55LO' },
  ]},
  { id: 'cx-03', modelNumber: 'CX-03', nameZh: '英仙幽冥', nameEn: 'Perseus Dark', series: 'CX', type: 'stamina', description: 'Bumper Assist Blade 緩衝助攻刃 + Wedge 楔形軸心。', popularity: 3, tier: 3, tips: '持久型，搭配楔形防禦。', recommendedCombos: [
    { ratchetId: 'r-6-80', bitId: 'b-wedge', rating: 3, note: '原裝配置 B6-80W' },
  ]},
  { id: 'cx-05-reaper', modelNumber: 'CX-05', nameZh: '惡魔獵魂', nameEn: 'Hells Reaper', series: 'CX', type: 'balance', description: '隨機強化組 Vol.6 大獎。Turn Assist Blade + Kick 踢擊軸心。', popularity: 3, tier: 3, tips: '踢擊軸心終盤反擊很有趣。', recommendedCombos: [
    { ratchetId: 'r-4-70', bitId: 'b-kick', rating: 4, note: '大獎配置 T4-70K' },
  ]},
  { id: 'cx-06-fox', modelNumber: 'CX-06', nameZh: '極狐九尾', nameEn: 'Fox Brush', series: 'CX', type: 'attack', description: '隨機強化組精選稀有款。Jaggy Assist Blade + Gear Rush 軸心。', popularity: 4, tier: 3, tips: 'Gear Rush 軸心衝刺力極強。', recommendedCombos: [
    { ratchetId: 'r-9-70', bitId: 'b-gear-rush', rating: 4, note: '稀有配置 J9-70GR' },
  ]},
  { id: 'cx-07', modelNumber: 'CX-07', nameZh: '天馬爆擊', nameEn: 'Pegasus Blast', series: 'CX', type: 'attack', description: 'Assault Assist Blade + Turbo 一體式棘齒軸心。天馬型爆發攻擊。注意：Turbo 為一體式零件，無法拆分棘齒與軸心。', popularity: 4, tier: 3, tips: 'Turbo 是一體式棘齒+軸心，不使用標準棘齒/軸心系統。', recommendedCombos: [] },
  { id: 'cx-08-cerberus', modelNumber: 'CX-08', nameZh: '魔犬烈焰', nameEn: 'Cerberus Flame', series: 'CX', type: 'defense', description: '隨機強化組 Vol.7 大獎。Wheel Assist Blade + Wall Ball 軸心。', popularity: 3, tier: 3, tips: '防禦型，搭配 Wall Ball 穩固。', recommendedCombos: [
    { ratchetId: 'r-5-80', bitId: 'b-wall-ball', rating: 4, note: '大獎配置 W5-80WB' },
  ]},
  { id: 'cx-09', modelNumber: 'CX-09', nameZh: '焰神滅世', nameEn: 'Sol Eclipse', series: 'CX', type: 'balance', description: 'Dual Assist Blade + Trans Kick 軸心，可切換持久/攻擊模式。', popularity: 4, tier: 3, tips: 'Trans Kick 模式切換很酷。', recommendedCombos: [
    { ratchetId: 'r-5-70', bitId: 'b-trans-kick', rating: 4, note: '原裝配置 D5-70TK' },
  ]},
  { id: 'cx-10', modelNumber: 'CX-10', nameZh: '銀狼狩獵', nameEn: 'Wolf Hunt', series: 'CX', type: 'stamina', description: 'Free Assist Blade + 0-60 零邊數棘齒 + Disc Ball 軸心。', popularity: 3, tier: 3, tips: '0-60 棘齒零邊數設計很特殊。', recommendedCombos: [
    { ratchetId: 'r-0-60', bitId: 'b-disc-ball', rating: 4, note: '原裝配置 F0-60DB' },
  ]},
  { id: 'cx-11', modelNumber: 'CX-11', nameZh: '帝王威能', nameEn: 'Emperor Might', series: 'CX', type: 'balance', description: '高階套組。Heavy Assist Blade + Operate 一體式軸心。注意：Operate 為一體式零件。附3顆陀螺的超值組。', popularity: 4, tier: 3, tips: 'Operate 是一體式棘齒+軸心。套組CP值高，一次補齊多種零件。', recommendedCombos: [
    { ratchetId: 'r-1-60', bitId: 'b-low-rush', rating: 5, note: 'G2冠軍防禦配置，利用高抽速撞擊達成持久轉移', source: '阿土入坑指南 (G2冠軍)' },
  ] },
  { id: 'cx-12', modelNumber: 'CX-12', nameZh: '鳳凰炎光', nameEn: 'Phoenix Flare', series: 'CX', type: 'defense', description: 'Zillion Assist Blade + 9-80 棘齒 + Wall Wedge 軸心。防禦新標竿。', popularity: 4, tier: 2, tips: '原裝 9-80WW 已是頂級防禦組合。', recommendedCombos: [
    { ratchetId: 'r-9-80', bitId: 'b-wall-wedge', rating: 5, note: '原裝配置 Z9-80WW' },
  ]},
  { id: 'cx-13', modelNumber: 'CX-13', nameZh: '龍王閃擊', nameEn: 'Bahamut Blitz', series: 'CX', type: 'attack', description: '2026年新世代！Expand Blade 系統：Metal Blade + Over Blade + Knuckle Assist。1-50 超低棘齒 + Ignition 點火軸心。', popularity: 5, tier: 0, bbxScore: 36, tips: '最新 Expand Blade 系統，超強攻擊型。', recommendedCombos: [
    { ratchetId: 'r-1-50', bitId: 'b-ignition', rating: 5, note: '原裝配置 BK1-50I' },
  ]},
  { id: 'cx-14', modelNumber: 'CX-14', nameZh: '騎士堡壘', nameEn: 'Knight Fortress', series: 'CX', type: 'defense', description: 'Expand Blade 防禦型。Guard Over Blade + Vertical Assist + 8-70 + Under Needle。', popularity: 4, tier: 2, bbxScore: 29, tips: '堡壘級防禦，Expand Blade 系統。', recommendedCombos: [
    { ratchetId: 'r-8-70', bitId: 'b-under-needle', rating: 4, note: '原裝配置 GV8-70UN' },
  ]},
  { id: 'cx-15', modelNumber: 'CX-15', nameZh: '邪神狂怒', nameEn: 'Ragna Rage', series: 'CX', type: 'stamina', description: 'Expand Blade 持久型。Flow Over Blade + Erase Assist + 4-55 + Yielding。', popularity: 3, tier: 1, tips: 'Yielding 柔順軸心吸震效果好。', recommendedCombos: [
    { ratchetId: 'r-4-55', bitId: 'b-yielding', rating: 3, note: '原裝配置 FE4-55Y' },
  ]},
  { id: 'cx-17-unicorn', modelNumber: 'CX-17', nameZh: '獨角三角洲', nameEn: 'Unicorn Delta', series: 'CX', type: 'balance', description: '隨機強化組 Vol.10 大獎。Peak + Odd Assist Blade + Gear Unite 軸心。', popularity: 3, tier: 3, tips: 'Gear Unite 是新的平衡軸心。', recommendedCombos: [
    { ratchetId: 'r-3-60', bitId: 'b-gear-unite', rating: 4, note: '大獎配置' },
  ]},

  // ================================================================
  //  UX-00 / CX-00 / BX-00 致敬經典 & 限定款
  // ================================================================
  { id: 'ux00-aero-pegasus', modelNumber: 'UX-00', nameZh: '空力天馬', nameEn: 'Aero Pegasus', series: 'UX', type: 'attack', description: 'UX-00 稀有APP限定款。空力學設計，基礎重38g（紅天馬可達39g）。圓滑三巨刃兼具持久與極高彈飛率。技術流首選。', popularity: 5, tier: 0, bbxScore: 65, tips: '操縱上限極高，強度取決於抽速與技術。曾被炒到萬元台幣。怕被下壓型克制。', recommendedCombos: [
    { ratchetId: 'r-3-70', bitId: 'b-accel', rating: 3, note: '原裝配置 3-70A' },
    { ratchetId: 'r-7-60', bitId: 'b-level', rating: 5, note: '世錦賽金牌配置', source: '2025 Beyblade X 世界錦標賽金牌' },
    { ratchetId: 'r-1-60', bitId: 'b-rush', rating: 5, note: '技術流首選，下線不穩但上線極高', source: '維辰孔丘 三月TOP5 (#3)' },
  ]},
  { id: 'cx00-valkyrie-volt', modelNumber: 'CX-00', nameZh: '戰神伏特', nameEn: 'Valkyrie Volt', series: 'CX', type: 'attack', description: 'CX-00 致敬經典「勝利戰神」。Slash Assist Blade + 特殊重量型金屬鎖扣晶片。', popularity: 4, tier: 3, tips: '致敬戰神系列，搭配 Vortex 渦旋軸心。', recommendedCombos: [
    { ratchetId: 'r-4-70', bitId: 'b-vortex', rating: 4, note: '原裝配置 S4-70V' },
  ]},
  { id: 'bx00-dranzer', modelNumber: 'BX-00', nameZh: '龍騎風暴', nameEn: 'Dranzer Spiral', series: 'BX', type: 'balance', description: '致敬初代「龍騎」的復刻版。', popularity: 3, tips: '經典回憶。', recommendedCombos: [
    { ratchetId: 'r-3-80', bitId: 'b-taper', rating: 3, note: '原裝配置 3-80T' },
  ]},
  { id: 'bx00-driger', modelNumber: 'BX-00', nameZh: '猛虎斬擊', nameEn: 'Driger Slash', series: 'BX', type: 'balance', description: '致敬初代「猛虎」的復刻版。', popularity: 3, tips: '經典回憶。', recommendedCombos: [
    { ratchetId: 'r-4-80', bitId: 'b-point', rating: 3, note: '原裝配置 4-80P' },
  ]},
  { id: 'bx00-draciel', modelNumber: 'BX-00', nameZh: '玄武聖盾', nameEn: 'Draciel Shield', series: 'BX', type: 'defense', description: '致敬初代「玄武」的復刻版。', popularity: 3, tips: '經典回憶。', recommendedCombos: [
    { ratchetId: 'r-7-60', bitId: 'b-dot', rating: 3, note: '原裝配置 7-60D' },
  ]},
  { id: 'bx00-dragoon', modelNumber: 'BX-00', nameZh: '龍旋風暴', nameEn: 'Dragoon Storm', series: 'BX', type: 'attack', description: '致敬經典「龍旋」。25週年紀念套組收錄。Rubber Accel 橡膠軸心。', popularity: 4, tips: '25週年收藏必備。', recommendedCombos: [
    { ratchetId: 'r-4-60', bitId: 'b-rubber-accel', rating: 4, note: '原裝配置 4-60RA' },
  ]},
  { id: 'bx00-xcalibur', modelNumber: 'BX-00', nameZh: '聖劍神威', nameEn: 'Xeno Xcalibur', series: 'BX', type: 'attack', description: '致敬「聖劍」系列。', popularity: 3, tier: 3, tips: '聖劍系列粉絲收藏。', recommendedCombos: [
    { ratchetId: 'r-3-60', bitId: 'b-gear-flat', rating: 4, note: '原裝配置 3-60GF' },
  ]},
  { id: 'bx00-leone', modelNumber: 'BX-00', nameZh: '岩獅獸王', nameEn: 'Rock Leone', series: 'BX', type: 'defense', description: '致敬「岩獅」復刻。', popularity: 3, tips: '經典回憶。', recommendedCombos: [
    { ratchetId: 'r-6-80', bitId: 'b-gear-needle', rating: 3, note: '原裝配置 6-80GN' },
  ]},
  { id: 'bx00-pegasus', modelNumber: 'BX-00', nameZh: '暴風天馬', nameEn: 'Storm Pegasus', series: 'BX', type: 'balance', description: '致敬經典「暴風天馬」復刻版。', popularity: 3, tier: 4, tips: '致敬 Pegasus 系列。', recommendedCombos: [
    { ratchetId: 'r-2-70', bitId: 'b-merge', rating: 3, note: '原裝配置 2-70M' },
  ]},
];

export const getBladeById = (id: string) => blades.find(b => b.id === id);

import { Ratchet } from '../types';

export const ratchets: Ratchet[] = [
  // === 50 高度 ===
  { id: 'r-1-50', name: '1-50', edges: 1, height: 50, heightMm: 5.0, burstResistance: 1, tier: 0, description: '極低重心特殊棘齒。', bestFor: ['attack'], sources: ['CX-13 龍王閃擊', 'CX-16 入門衝刺組C'] },
  { id: 'r-4-50', name: '4-50', edges: 4, height: 50, heightMm: 5.0, burstResistance: 4, tier: 2, description: '超低位＋高防爆裂。', bestFor: ['attack'], sources: ['BX-49 翔龍突擊'] },

  // === 55 高度 (CX Simple Type) ===
  { id: 'r-4-55', name: '4-55', edges: 4, height: 55, heightMm: 5.5, burstResistance: 4, tier: 2, description: 'CX 系列 O型接頭簡易型棘齒。', bestFor: ['stamina', 'balance'], sources: ['CX-02 魔導至尊', 'CX-15 邪神狂怒'] },
  { id: 'r-7-55', name: '7-55', edges: 7, height: 55, heightMm: 5.5, burstResistance: 5, tier: 2, description: 'CX 簡易型高防爆裂。', bestFor: ['balance', 'defense'], sources: ['UX-18 隨機強化組 Vol.8'] },

  // === 60 高度 ===
  { id: 'r-0-60', name: '0-60', edges: 0, height: 60, heightMm: 6.0, burstResistance: 0, tier: 3, description: '零邊數！完全圓形，爆裂抗性最低但重量分佈最均勻。', bestFor: ['stamina'], sources: ['CX-10 銀狼狩獵'] },
  { id: 'r-1-60', name: '1-60', edges: 1, height: 60, heightMm: 6.0, burstResistance: 1, tier: 0, weight: '~6g', description: '極致低重心，世錦賽冠軍愛用。阿土天梯 T0 第一名。', bestFor: ['stamina'], sources: ['UX-01 蒼龍爆刃', 'UX-13 魔像奇岩'] },
  { id: 'r-2-60', name: '2-60', edges: 2, height: 60, heightMm: 6.0, burstResistance: 2, tier: 4, description: '低重心、2邊。基礎穩定型。', bestFor: ['stamina', 'attack'], sources: ['BX-34 蒼穹龍騎士'] },
  { id: 'r-3-60', name: '3-60', edges: 3, height: 60, heightMm: 6.0, burstResistance: 3, tier: 1, weight: '6.30-6.40g', description: '萬用型低位棘齒，最常見的競技選擇之一。', bestFor: ['attack', 'stamina'], sources: ['BX-01 蒼龍神劍', 'BX-14 隨機強化組 Vol.1', 'CX-17 隨機強化組 Vol.10'] },
  { id: 'r-4-60', name: '4-60', edges: 4, height: 60, heightMm: 6.0, burstResistance: 4, tier: 2, description: '低位且爆裂抗性高。', bestFor: ['attack'], sources: ['BX-02 惡魔紅鐮', 'BX-00 龍旋風暴 (25週年)'] },
  { id: 'r-5-60', name: '5-60', edges: 5, height: 60, heightMm: 6.0, burstResistance: 4, tier: 2, description: '中段穩定輸出。', bestFor: ['stamina', 'balance'], sources: ['BX-15 雄獅獵爪', 'BX-26 獨角刺心'] },
  { id: 'r-6-60', name: '6-60', edges: 6, height: 60, heightMm: 6.0, burstResistance: 5, tier: 1, description: '低位高防爆裂。', bestFor: ['attack', 'balance'], sources: ['CX-01 蒼龍勇氣'] },
  { id: 'r-7-60', name: '7-60', edges: 7, height: 60, heightMm: 6.0, burstResistance: 5, tier: 0, description: '萬用高防爆裂。世錦賽金牌空力天馬搭配此款。', bestFor: ['balance', 'attack', 'stamina'], sources: ['UX-06 雄獅巔峰', 'BX-00 玄武聖盾'] },
  { id: 'r-9-60', name: '9-60', edges: 9, height: 60, heightMm: 6.0, burstResistance: 5, tier: 0, description: '最低爆裂風險！9邊＋低重心，萬用型之王。', bestFor: ['attack', 'stamina', 'balance', 'defense'], sources: ['BX-23 鳳凰飛翼', 'UX-11 衝擊龍神'] },

  // === 65 高度 ===
  { id: 'r-9-65', name: '9-65', edges: 9, height: 65, heightMm: 6.5, burstResistance: 5, tier: 4, description: '隨機強化組限定特殊高度。', bestFor: ['balance', 'stamina'], sources: ['CX-17 隨機強化組 Vol.10 (武士星劍)'] },

  // === 70 高度 ===
  { id: 'r-0-70', name: '0-70', edges: 0, height: 70, heightMm: 7.0, burstResistance: 0, tier: 2, description: '中高位零邊數。', bestFor: ['balance'], sources: ['UX-14 天蠍長矛'] },
  { id: 'r-1-70', name: '1-70', edges: 1, height: 70, heightMm: 7.0, burstResistance: 1, tier: 1, description: '中高位低防爆裂。世錦賽銀牌鯊魚搭配此款。', bestFor: ['attack', 'stamina'], sources: ['隨機強化組'] },
  { id: 'r-2-70', name: '2-70', edges: 2, height: 70, heightMm: 7.0, burstResistance: 2, tier: 5, description: '中高位，平衡性佳。', bestFor: ['attack', 'balance'], sources: ['UX-09 武士星劍', 'BX-00 暴風天馬'] },
  { id: 'r-3-70', name: '3-70', edges: 3, height: 70, heightMm: 7.0, burstResistance: 3, tier: 2, description: '中等高度泛用型。', bestFor: ['balance', 'attack'], sources: ['UX-02 惡魔戰槌 (原裝 3-70H)', 'UX-17 隕星龍騎士', 'BX-31 隨機強化組 Vol.3'] },
  { id: 'r-4-70', name: '4-70', edges: 4, height: 70, heightMm: 7.0, burstResistance: 4, tier: 3, description: '中高位穩定型。', bestFor: ['balance'], sources: ['BX-38 赫燃天鳳', 'CX-00 戰神伏特', 'CX-05 隨機強化組 Vol.6'] },
  { id: 'r-5-70', name: '5-70', edges: 5, height: 70, heightMm: 7.0, burstResistance: 4, tier: 2, description: '泛用型中高位。UX-03 魔導神杖原裝搭配。', bestFor: ['balance', 'stamina'], sources: ['UX-03 魔導神杖 (原裝 5-70DB)', 'CX-09 焰神滅世'] },
  { id: 'r-6-70', name: '6-70', edges: 6, height: 70, heightMm: 7.0, burstResistance: 5, tier: 2, description: '中高位高防爆裂。', bestFor: ['balance', 'defense'], sources: ['BX-45 武士魂斬', '隨機強化組'] },
  { id: 'r-7-70', name: '7-70', edges: 7, height: 70, heightMm: 7.0, burstResistance: 5, tier: 1, description: '中高位極高防爆裂。', bestFor: ['balance', 'defense'], sources: ['隨機強化組'] },
  { id: 'r-8-70', name: '8-70', edges: 8, height: 70, heightMm: 7.0, burstResistance: 5, tier: 2, description: '極高防爆裂。', bestFor: ['defense'], sources: ['CX-14 騎士堡壘'] },
  { id: 'r-9-70', name: '9-70', edges: 9, height: 70, heightMm: 7.0, burstResistance: 5, tier: 1, description: '高爆裂抗性中高位。世錦賽銀牌神杖搭配。', bestFor: ['stamina', 'balance'], sources: ['CX-06 隨機強化組 極狐九尾精選'] },

  // === 80 高度 ===
  { id: 'r-0-80', name: '0-80', edges: 0, height: 80, heightMm: 8.0, burstResistance: 0, tier: 4, description: '高位零邊數。極端特化型。', bestFor: ['stamina'], sources: ['隨機強化組'] },
  { id: 'r-1-80', name: '1-80', edges: 1, height: 80, heightMm: 8.0, burstResistance: 1, tier: 2, description: '高位低防爆裂。', bestFor: ['stamina'], sources: ['CX-17 隨機強化組 Vol.10 (獨角三角洲)'] },
  { id: 'r-2-80', name: '2-80', edges: 2, height: 80, heightMm: 8.0, burstResistance: 2, tier: 5, description: '高位低防爆裂。', bestFor: ['defense'], sources: ['BX-20 蒼龍利刃套組'] },
  { id: 'r-3-80', name: '3-80', edges: 3, height: 80, heightMm: 8.0, burstResistance: 3, tier: 4, description: '防禦型常用高位棘齒。', bestFor: ['defense'], sources: ['BX-04 騎士重盾 (原裝 3-80N)', 'UX-08 霜輝銀狼'] },
  { id: 'r-3-85', name: '3-85', edges: 3, height: 85, heightMm: 8.5, burstResistance: 3, tier: 4, description: '特殊高度簡易型棘齒。', bestFor: ['defense'], sources: ['UX-10 改造套組U (騎士鎧甲)', 'CX-17 隨機強化組 Vol.10'] },
  { id: 'r-4-80', name: '4-80', edges: 4, height: 80, heightMm: 8.0, burstResistance: 4, tier: 5, description: '高位攻擊推薦。', bestFor: ['attack', 'defense'], sources: ['BX-03 魔導幻箭', 'BX-13 騎士長槍', 'BX-00 猛虎斬擊'] },
  { id: 'r-5-80', name: '5-80', edges: 5, height: 80, heightMm: 8.0, burstResistance: 4, tier: 5, description: '高位持久型常用。', bestFor: ['stamina', 'defense'], sources: ['BX-16 隨機強化組 王蛇鞭尾精選', 'CX-08 隨機強化組 Vol.7'] },
  { id: 'r-6-80', name: '6-80', edges: 6, height: 80, heightMm: 8.0, burstResistance: 5, tier: 5, description: '高位高防爆裂。', bestFor: ['defense', 'stamina'], sources: ['CX-03 英仙幽冥', 'BX-00 岩獅獸王'] },
  { id: 'r-7-80', name: '7-80', edges: 7, height: 80, heightMm: 8.0, burstResistance: 5, tier: 3, description: '高位極高防爆裂。', bestFor: ['defense'], sources: ['CX-17 隨機強化組 Vol.10 (赫燃天鳳)'] },
  { id: 'r-9-80', name: '9-80', edges: 9, height: 80, heightMm: 8.0, burstResistance: 5, tier: 3, description: '最高爆裂抗性＋高重心。防禦型頂配。', bestFor: ['defense'], sources: ['CX-12 鳳凰炎光'] },

  // === 特殊 ===
  { id: 'r-M-85', name: 'M-85', edges: 0, height: 85, heightMm: 8.5, burstResistance: 3, tier: 3, description: '金屬材質特殊棘齒。M = Metal，增加重量。', bestFor: ['defense'], sources: ['BX-44 三角強襲'] },
];

export const getRatchetById = (id: string) => ratchets.find(r => r.id === id);

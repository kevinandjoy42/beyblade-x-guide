export type BladeType = 'attack' | 'defense' | 'stamina' | 'balance';

export type BladeSeries = 'BX' | 'UX' | 'CX';

export interface Blade {
  id: string;
  modelNumber: string;
  nameZh: string;
  nameEn: string;
  series: BladeSeries;
  type: BladeType;
  description: string;
  recommendedCombos: RecommendedCombo[];
  tips: string;
  popularity: number; // 1-5
  tier?: number; // 0-5, 阿土天梯排名 (0=T0最強, 5=T5不推薦)
  bbxScore?: number; // BBX Weekly 賽事積分 (越高越強)
}

export interface Ratchet {
  id: string;
  name: string;
  edges: number;
  height: number;
  heightMm: number;
  burstResistance: number; // 1-5
  tier?: number; // 0-5, 阿土天梯排名 (0=T0最強, 5=T5不推薦)
  weight?: string;
  description: string;
  bestFor: BladeType[];
  sources: string[]; // 哪些產品包含此零件
}

export interface Bit {
  id: string;
  name: string;
  nameEn: string;
  type: BladeType;
  description: string;
  movement: string;
  xDashRating: number; // 1-5
  burstResistance: number; // 1-5
  tier?: number; // 0-5, 阿土天梯排名 (0=T0最強, 5=T5不推薦)
  bestFor: BladeType[];
  sources: string[]; // 哪些產品包含此零件
}

export interface RecommendedCombo {
  ratchetId: string;
  bitId: string;
  rating: number; // 1-5
  note: string;
  source?: string; // 資料來源
}

export interface CollectionItem {
  bladeId?: string;
  ratchetId?: string;
  bitId?: string;
  addedAt: number;
  notes: string;
}

export interface LearningNote {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
}

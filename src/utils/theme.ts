import { BladeType } from '../types';

export const colors = {
  // 深色底搭配鮮豔對比 — 參考戰鬥陀螺X官方配色
  background: '#08090F',
  surface: '#101220',
  surfaceLight: '#181C30',
  card: '#12152A',
  cardBorder: '#222845',
  cardHighlight: '#1A2040',

  // 主色 — 亮藍+橘紅，像 X 加速軌道的光芒
  primary: '#00BFFF',
  primaryDim: '#0088BB',
  secondary: '#FF5722',
  secondaryDim: '#CC4018',
  accent: '#FFD600',
  accentDim: '#BBA000',

  // 文字
  text: '#F0F0F5',
  textSecondary: '#8A90AE',
  textMuted: '#4E5478',

  // 類型色 — 飽和、鮮明、有辨識度
  attack: '#FF3D3D',
  attackBg: '#FF3D3D18',
  defense: '#338AFF',
  defenseBg: '#338AFF18',
  stamina: '#00CC66',
  staminaBg: '#00CC6618',
  balance: '#FFAA00',
  balanceBg: '#FFAA0018',

  star: '#FFD600',
  danger: '#FF3D3D',
  success: '#00CC66',

  // 裝飾線
  railGlow: '#00BFFF40',
  xDash: '#FF572260',
};

export const tierColors: Record<number, string> = {
  0: '#FFD600', // T0 — 金
  1: '#AA66FF', // T1 — 紫
  2: '#00CC66', // T2 — 綠
  3: '#8A90AE', // T3 — 灰
  4: '#4E5478', // T4 — 暗灰
  5: '#FF3D3D', // T5 — 紅
};

export const tierLabels: Record<number, string> = {
  0: 'T0',
  1: 'T1',
  2: 'T2',
  3: 'T3',
  4: 'T4',
  5: 'T5',
};

export const typeColors: Record<BladeType, string> = {
  attack: colors.attack,
  defense: colors.defense,
  stamina: colors.stamina,
  balance: colors.balance,
};

export const typeBgColors: Record<BladeType, string> = {
  attack: colors.attackBg,
  defense: colors.defenseBg,
  stamina: colors.staminaBg,
  balance: colors.balanceBg,
};

export const typeLabels: Record<BladeType, string> = {
  attack: '攻擊型',
  defense: '防禦型',
  stamina: '持久型',
  balance: '平衡型',
};

export const typeIcons: Record<BladeType, string> = {
  attack: '⚔️',
  defense: '🛡️',
  stamina: '🔄',
  balance: '⚖️',
};

export const seriesColors: Record<string, string> = {
  BX: '#00BFFF',
  UX: '#AA66FF',
  CX: '#FF5722',
};

export const seriesLabels: Record<string, string> = {
  BX: '基礎系列',
  UX: '強化系列',
  CX: '改造系列',
};

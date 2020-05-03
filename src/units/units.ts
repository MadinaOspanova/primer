export const Units = {
  EM: 'em',
  PX: 'px',
  PERCENT: '%',
  VH: 'vh',
  VW: 'vw',
  RAD: 'rad',
  REM: 'rem',
  TURN: 'turn'
}

export const formatUnit = (unit) => (val) => (val + unit);

export const em = formatUnit(Units.EM);
export const px = formatUnit(Units.PX);
export const percent = formatUnit(Units.PERCENT);
export const vh = formatUnit(Units.VH);
export const vw = formatUnit(Units.VW);
export const rad = formatUnit(Units.RAD);
export const rem = formatUnit(Units.REM);
export const turn = formatUnit(Units.TURN);
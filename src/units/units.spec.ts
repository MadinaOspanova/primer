import { em, px, percent, vh, vw, rad, rem, turn, Units  } from './units';

describe('unit appending', () => {
  const val = 40;
  it(`returns the ${Units.EM} value`, () => {
    expect(em(val)).toBe('40em');
  });
  it(`returns the ${Units.PX} value`, () => {
    expect(px(val)).toBe('40px');
  });
  it(`returns the ${Units.PERCENT} value`, () => {
    expect(percent(val)).toBe('40%');
  });
  it(`returns the ${Units.VH} value`, () => {
    expect(vh(val)).toBe('40vh');
  });
  it(`returns the ${Units.VW} value`, () => {
    expect(vw(val)).toBe('40vw');
  });
  it(`returns the ${Units.RAD} value`, () => {
    expect(rad(val)).toBe('40rad');
  });
  it(`returns the ${Units.REM} value`, () => {
    expect(rem(val)).toBe('40rem');
  });
  it(`returns the ${Units.TURN} value`, () => {
    expect(turn(val)).toBe('40turn');
  });      
});

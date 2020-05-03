import {hexToRGB} from './transform';


describe('hexToRGB', () => {
  it('should return RGB color', () => {

    expect(hexToRGB('#f7f7f7', 0.1)).toBe('rgba(247, 247, 247, 0.1)');
  })
})
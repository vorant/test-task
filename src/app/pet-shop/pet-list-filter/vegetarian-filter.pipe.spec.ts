import { VegetarianFilterPipe } from './vegetarian-filter.pipe';

describe('VegetarianFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new VegetarianFilterPipe();
    expect(pipe).toBeTruthy();
  });
});

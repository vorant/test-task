import { ProductByPetPipe } from './product-by-pet.pipe';

describe('ProductByPetPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductByPetPipe();
    expect(pipe).toBeTruthy();
  });
});

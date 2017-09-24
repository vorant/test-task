import { ProductByPetPipe } from './product-by-pet.pipe';
import { MockPets } from "../../mocks/mock-pets-api.service";
import { MockProducts } from "../../mocks/mock-products-api.service";

describe('ProductByPetPipe -> ', () => {
  const pipe = new ProductByPetPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filter Products by No Pets', () => {
    const noPets = pipe.transform(MockProducts);

    expect(MockProducts.length).toEqual(noPets.length);
  });

  it('filter Products by All Pets', () => {
    const allPets = pipe.transform(MockProducts, MockPets);

    expect(MockProducts.length).toEqual(allPets.length);
  });

  it('filter Products by Dog Pets', () => {
    const dogPets = pipe.transform(MockProducts, [MockPets[0]]);

    expect(dogPets.length).toEqual(3);
  });

  it('filter Products by Dog and Fish Pets', () => {
    const dogAndFishPets = pipe.transform(MockProducts, [MockPets[0], MockPets[5]]);

    expect(dogAndFishPets.length).toEqual(4);
  });
});

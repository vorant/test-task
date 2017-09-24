import { VegetarianFilterPipe } from './vegetarian-filter.pipe';

import { MockPets } from "../../mocks/mock-pets-api.service";

describe('VegetarianFilterPipe -> ', () => {
  const pipe = new VegetarianFilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter ONLY vegetarians', () => {
    const vegetarianPets = pipe.transform(MockPets, true);

    expect(MockPets.length).toEqual(8);
    expect(vegetarianPets.length).toEqual(5);
  });

  it('should filter All vegetarians', () => {
    const vegetarianPets = pipe.transform(MockPets, false);

    expect(MockPets.length).toEqual(8);
    expect(vegetarianPets.length).toEqual(8);
  });
});

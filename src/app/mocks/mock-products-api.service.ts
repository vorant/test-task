import {MockBackend, MockConnection} from '@angular/http/testing';
import {RequestMethod, ResponseOptions, Request, Response} from '@angular/http';
import {Injectable} from '@angular/core';

export const listOfProducts = () => {

  return [
    {
      name: 'Bonzo',
      price: 10,
      pets: ['Dog'],
      imageUrl: "http://www.askmumu.com/cmsfiles/products_06/bonzo.jpg",
    },
    {
      name: 'Instinct Chicken',
      price: 14.7,
      pets: ['Dog', 'Cat'],
      imageUrl: "https://www.naturalinstinct.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/n/a/natural_instinct_natural_dog_food_chicken_1kg.png"
    },
    {
      name: 'Kiki Sunflower',
      price: 3.5,
      pets: ['Cat', 'Parrot'],
      imageUrl: "https://nz.miscota.com/media/1/photos/products/049478/49478-mta311-kiki-pipas-girasol-extra-gruesas-500gr_1_g.jpg"
    },
    {
      name: 'Red Green Granulat',
      price: 7.5,
      pets: ['Fish'],
      imageUrl: "https://pbs.twimg.com/media/CjH3p4_XIAE_6H6.jpg"
    },
    {
      name: 'Calcium Exo',
      price: 12,
      pets: ['Snack', 'Lizard', 'Cat', 'Dog'],
      imageUrl: "http://www.drsfostersmith.com/images/Categoryimages/normal/p-73503-91346R_006.jpg"
    },
    {
      name: 'Grested Exo Terra',
      price: 11,
      pets: ['Iguana', 'Lizard'],
      imageUrl: "http://www.exo-terra.com/download/high_res/products/images/MOCK-UP_Crested%20Gecko-Food_NA_PT3260.jpg"
    },
    {
      name: 'Ultra Blend Select',
      price: 8.99,
      pets: ['Hedgehog'],
      imageUrl: "https://pv-web-01t.s3.amazonaws.com/images/50298.jpg"
    }
  ];
};

export const MockProducts: Array<any> = listOfProducts();

@Injectable()
export class MockProductsAPI {

  constructor(private backend: MockBackend) {}

  public handleRequest(): void {

    this.backend.connections.subscribe((connection: MockConnection) => {

      const req: Request = connection.request;
      const baseUrl = `/products/`;

      // Get products for 'products view'
      if (req.method === RequestMethod.Get && new RegExp(`${baseUrl}`).test(req.url)) {
        setTimeout(() => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: listOfProducts()
            })));
        }, 500);
      }
    });
  }
}

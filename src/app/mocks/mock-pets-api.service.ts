import {Injectable} from "@angular/core";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {RequestMethod, ResponseOptions, Response, Request} from "@angular/http";

const listOfPets = () => {

  return [
    {
      name: 'Dog',
      isVegetarian: false,
    },
    {
      name: 'Cat',
      isVegetarian: false,
    },
    {
      name: 'Snack',
      isVegetarian: false,
    },
    {
      name: 'Hedgehog',
      isVegetarian: true,
    },
    {
      name: 'Parrot',
      isVegetarian: true,
    },
    {
      name: 'Fish',
      isVegetarian: true,
    },
    {
      name: 'Iguana',
      isVegetarian: true,
    },
    {
      name: 'Lizard',
      isVegetarian: true,
    }
  ];
};

@Injectable()
export class MockPetsAPI {

  constructor(private backend: MockBackend) {}

  public handleRequest(): void {

    this.backend.connections.subscribe((connection: MockConnection) => {

      const req: Request = connection.request;
      const baseUrl = `/pets/`;

      // Get pets
      if (req.method === RequestMethod.Get && new RegExp(`${baseUrl}`).test(req.url)) {
        setTimeout(() => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: listOfPets()
            })));
        }, 500);
      }
    });
  }
}

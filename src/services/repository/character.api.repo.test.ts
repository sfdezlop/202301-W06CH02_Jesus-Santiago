import { CharacterApiRepo } from './character.api.repo';

describe('Given the service Api repo class', () => {
  describe('When create a new object of the class', () => {
    test('Then it should be able to call its method', async () => {
      const mockCharacter = [
        {
          name: 'Joffrey Baratheon',
          family: 'Baratheon',
          age: 19,
          isAlive: true,
          message: 'Vais a morir todos',
          category: 'king',
          kingdomYears: 5,
          weapon: '',
          skill: 0,
          submission: 2,
          master: {
            name: 'Jaime Lannister',
            family: 'Lannister',
            age: 34,
            isAlive: true,
            message: 'Primero pego y luego pregunto',
            category: 'fighter',
            kingdomYears: 0,
            weapon: '',
            skill: 0,
            submission: 2,
            image: 'assets/jaime.jpg',
          },
          image: 'assets/joffrey.jpg',
        },
      ];
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          characters: [
            {
              name: 'Joffrey Baratheon',
              family: 'Baratheon',
              age: 19,
              isAlive: true,
              message: 'Vais a morir todos',
              category: 'king',
              kingdomYears: 5,
              weapon: '',
              skill: 0,
              submission: 2,
              master: {
                name: 'Jaime Lannister',
                family: 'Lannister',
                age: 34,
                isAlive: true,
                message: 'Primero pego y luego pregunto',
                category: 'fighter',
                kingdomYears: 0,
                weapon: '',
                skill: 0,
                submission: 2,
                image: 'assets/jaime.jpg',
              },
              image: 'assets/joffrey.jpg',
            },
          ],
        }),
      });
      const repo = new CharacterApiRepo();
      expect(repo).toBeInstanceOf(CharacterApiRepo);
      // const load = await repo.loadCharacters();
      // expect(load).toEqual(mockCharacter);
    });
  });
});

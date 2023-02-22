import { CharacterStructure } from "../../core/models/character";

export interface CharacterApiRepoStructure {
  loadCharacters(): Promise<CharacterStructure[]>;
  update(character: CharacterStructure): Promise<CharacterStructure>;
}

export class CharacterApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:5080/characters";
  }
  async loadCharacters(): Promise<CharacterStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as CharacterStructure[];
    return data;
  }

  async update(character: CharacterStructure): Promise<CharacterStructure> {
    const url = this.url + "/" + character.name;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(character),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as CharacterStructure;
    return data;
  }
}

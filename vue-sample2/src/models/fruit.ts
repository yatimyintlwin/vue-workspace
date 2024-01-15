export class Fruit {
  constructor(
    public id: number,
    public name: string,
    public isFavorite: boolean,
    public isEditMode: boolean = false
  ) {}
}

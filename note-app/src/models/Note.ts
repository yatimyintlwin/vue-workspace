export class Note {
  constructor(
    public id: number = Date.now(),
    public header: string,
    public title: string,
    public note: string,
  ) {}
}

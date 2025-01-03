export class Todo {
  constructor(
    public id: number = Date.now(),
    public newTodo: string,
  ) {}
}

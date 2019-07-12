export class MyServerResponse<T> {
  constructor(
    public status: 'success' | 'error',
    public payload?: T
  ) { }
}

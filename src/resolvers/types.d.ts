export interface LiveState<T> {
  read(): T;
  subscribe(callback: () => void): void;
}

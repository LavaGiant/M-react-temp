declare namespace StoreGlobal {
  interface ActionType<T> {
    readonly type: string
    value: T
  }
}
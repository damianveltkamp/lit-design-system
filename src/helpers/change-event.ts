export interface ChangeEvent<T = Element> extends InputEvent {
  target: EventTarget & T;
}

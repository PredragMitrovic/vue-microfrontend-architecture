// types/event-bus.d.ts

// types/event-bus.d.ts

export interface EventBus {
  $emit: (event: string, ...args: any[]) => void;
  $on: (event: string, callback: (...args: any[]) => void) => void;
  $off: (event: string, callback?: (...args: any[]) => void) => void;
}ss
import { convertToBoolean } from "./function";

export function BooleanInput<K extends string, T extends Record<K, any>>(target: T, key: K) {
  const privateKey = "$$" + key as "$$privateKey";
  Object.defineProperty(target, key, {
    configurable: true,
    enumerable: false,
    get(this: Record<typeof privateKey, boolean>) {
      return this[privateKey] || false;
    },
    set(this: Record<typeof privateKey, boolean>, value: any) {
      this[privateKey] = convertToBoolean(value);
    },
  });
}

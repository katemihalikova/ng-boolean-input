export function BooleanInput<K extends string, T extends Record<K, boolean | string | undefined>>(target: T, key: K) {
  const privateKey = "$$" + key;
  Object.defineProperty(target, key, {
    configurable: true,
    enumerable: false,
    get(this: Record<typeof privateKey, boolean>) {
        return this[privateKey] || false;
    },
    set(this: Record<typeof privateKey, boolean>, value: boolean | string | undefined) {
        this[privateKey] = value ? value !== "false" : value === "";
    },
  });
}

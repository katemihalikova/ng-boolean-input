export function convertToBoolean(value?: any): boolean {
  return value ? value !== "false" : value === "";
}

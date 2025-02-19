// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timer: number | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  } as T;
}

export function range(arr: number[], from: number, to: number, step = 1): number[] {
  if (step <= 0) throw new Error("Step must be greater than 0");
  if (from >= to) return [];
  
  const result: number[] = [];
  for (let i = from; i < to; i += step) {
    result.push(arr[i]);
  }

  return result;
}

export function mapValuesAtIndex(obj: object, index: number) {
  return Object.fromEntries(
    Object.entries(obj).map(([Key, value]) => [Key, value[index]])
  ) as unknown;
}

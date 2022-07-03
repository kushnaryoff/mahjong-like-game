const isPrime = (n: number) => {
  if (n <= 1) return false

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false
    }
  }

  return true
}

interface GetPrimesOptions {
  from?: number
  to?: number
}

export const getPrimes = ({ from = 1, to = 50 }: GetPrimesOptions = {}) =>
  new Array(to - from + 1)
    .fill(0)
    .map((_, i) => i + 5)
    .filter(isPrime)

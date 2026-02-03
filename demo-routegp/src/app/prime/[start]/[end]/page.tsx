import { start } from "repl";

export default async function Page({
  params,
}: {
  params: Promise<{ start: string; end: string }>;
}) {

  const {start , end }= await params

  const s = Number(start)
  const e = Number(end)
  const primes: number[] = [];

  const isPrime = (n: number) => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  for (let i = s; i <= e; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return (
    <div>
      <h1>Prime numbers between {start} and {end}</h1>
      <p>{primes.join(", ")}</p>
    </div>
  );
}

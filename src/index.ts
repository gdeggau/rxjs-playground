import { from, fromEvent, interval, Observable, of, timer } from "rxjs";

console.log("App Started");

const interval$ = new Observable<number>((subscriber) => {
  let counter = 0;

  const intervalId = setInterval(() => {
    console.log("Interval");
    subscriber.next(counter++);
  }, 1000);

  return () => clearInterval(intervalId);
});

const subscription = interval$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Completed"),
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log("Unsubscribe");
}, 5000);

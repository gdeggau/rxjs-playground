import { from, fromEvent, Observable, of, timer } from "rxjs";

console.log("App Started");

const timer$ = new Observable<number>((subscriber) => {
  const timeoutId = setTimeout(() => {
    console.log("Timeout");
    subscriber.next(0);
    subscriber.complete();
  }, 2000);

  return () => clearTimeout(timeoutId);
});

const subscription = timer$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Completed"),
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log("Unsubscribe");
}, 1000);

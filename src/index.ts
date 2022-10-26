import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  console.log("Observable Executed");
  subscriber.next("Alice");
  subscriber.next("Ben");
  setTimeout(() => {
    subscriber.next("Charlie");
  }, 2000);

  setTimeout(() => {
    subscriber.error(new Error("Failure"));
  }, 4000);

  return () => {
    console.log("Teardown");
  };
});

console.log("Before subscribe");
observable$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err.message),
});

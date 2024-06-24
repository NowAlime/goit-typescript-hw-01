interface Person {
    name: string;
    address?: { city: string };
  }
  
  interface AdditionFields {
    age?: number;
    job?: string;
  }
  
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  
  const merged1 = merge<Person, AdditionFields>({ name: "John" }, { age: 30 });
  console.log(merged1);
  
  const merged2 = merge<Person, AdditionFields>(
    { name: "Alice" },
    { job: "Engineer" }
  );
  console.log(merged2);
  
  const merged3 = merge<Person, AdditionFields>(
    { name: "Bob", address: { city: "New York" } },
    { age: 25 }
  );
  console.log(merged3);
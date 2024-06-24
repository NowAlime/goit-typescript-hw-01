type UserOne = {
    age: number;
    username: string;
    toggle: boolean;
    empty: null;
  };
  
  const callback = (a: number): number => {
    return 100 + a;
  };
  
  console.log(callback(6)); 
  
function showMessage(message: string): void {
    console.log(message);
  }
  showMessage("Hello World");
  
  function calc(num1: number, num2: number): number {
    return num1 + num2;
  }
  const result = calc(4, 9);
  console.log(`Result: ${result}`);
  
  function customError(): never {
    throw new Error("Error");
  }
  try {
    customError;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
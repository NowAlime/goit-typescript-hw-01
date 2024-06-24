type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };
  
  function compare<T extends AllType, U extends AllType>(
    top: Pick<T, keyof AllType>,
    bottom: Pick<U, keyof AllType>
  ): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }
  
  const obj1 = { name: "John", position: 1, color: "red", weight: 70 };
  const obj2 = { name: "Alice", position: 2, color: "blue", weight: 65 };
  
  const resultOfCompare = compare(obj1, obj2);
  console.log(resultOfCompare);
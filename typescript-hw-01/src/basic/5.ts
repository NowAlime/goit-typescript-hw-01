enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
  };
  console.log(`Is it weekend: ${isWeekend(DayOfWeek.Friday)}`);
  console.log(`Is it weekend: ${isWeekend(DayOfWeek.Sunday)}`);
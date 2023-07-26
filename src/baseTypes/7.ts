/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
  }

function isWeekend(day: Day): boolean {
  if (day < 5) return true; 
  return false; 
  
}

console.log(isWeekend(Day.SUNDAY))
export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My andrew id is hehehaha"
    );
  }

  if (query.toLowerCase().includes("your name")) {
    return (
      "teamapi"
    );
  }

  if (query.toLowerCase().includes("multiplied")) {
    const shortQuery = query.slice(0, -1)
    const numbersPart = shortQuery.split(" "); 
    const num1 = parseInt(numbersPart[2], 10);
    const num2 = parseInt(numbersPart[5], 10);
    return (
      String(num1 * num2)
    );
  }

  if (query.toLowerCase().includes("plus")) {
    const shortQuery = query.slice(0, -1)
    const numbersPart = shortQuery.split(" "); 
    const num1 = parseInt(numbersPart[2], 10);
    const num2 = parseInt(numbersPart[4], 10);
    return (
      String(num1 + num2)
    );
  }

  if (query.toLowerCase().includes("largest:")) {
    const shortQuery = query.slice(0, -1)
    const numbersPart = shortQuery.split(":"); 
    const numbersOnly = numbersPart.pop()
    let max = -100000000;
    if (numbersOnly) {
      const numbers = numbersOnly.split(",")
        .map(num => parseInt(num.trim(), 10)) 
        .slice(-3); 

      for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] > max) {
              max = numbers[i];
          }
      }

    }
    
  
    return (
      String(max)
    );
  }

  return "";
}

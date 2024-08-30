function transformArray(arr) {
  return arr.map(num => {
    // Check if the number is even
    if (num % 2 === 0) {
      // Double the even number
      return num * 2;
    } else {
      // Keep the odd number unchanged
      return num;
    }
  });
}

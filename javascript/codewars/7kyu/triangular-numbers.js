// Triangular number is any amount of points that can fill an equilateral triangle.

// Example: the number 6 is a triangular number because all sides of a triangle has the same amount of points.

// alt text

// Hint!
// T(n) = n * (n + 1) / 2,
// n - is the size of one side.
// T(n) - is the triangular number.
// Given a number T from interval [1..2147483646], find if it is triangular number or not.

// Appreciate the feedback!

// MATHEMATICSFUNDAMENTALS

function isTriangular(t) {
    if (t < 0) {return false}
   
    let sum = 0
    for (let n = 1; sum <= t; n++) {
      sum += n
      if (sum == t) {
        return true
      }
    }
    return false
  }
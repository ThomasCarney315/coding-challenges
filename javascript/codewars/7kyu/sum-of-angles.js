//Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

const angle = n => Math.round((((n-2)/n) * 180 ) * n)

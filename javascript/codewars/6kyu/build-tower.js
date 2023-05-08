// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

// STRINGSASCII ARTFUNDAMENTALS

function towerBuilder(nFloors) {
    let tower = [];
    let base = 1 + 2 * (nFloors - 1);
    let floor = '';
    
    for (let i = 0; i < base; i++){
      floor += '*';
    }
    tower.push(floor);
    
    for (let i = nFloors; i >1; i--){
      floor = floor.split('');
      floor.splice(floor.lastIndexOf('*'),1,' ');
      floor.splice(floor.indexOf('*'),1,' ');
      floor = floor.join('');
      tower.unshift(floor);
    }
    return tower
  }
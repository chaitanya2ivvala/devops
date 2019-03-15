var _ = require('lodash');
console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
var array=[0, 1, false, 2, '', 3];
console.log(_.compact(array));
var other = _.concat(array, 2, [3], [[4]]);
console.log(_.compact(other));
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
console.log(_.difference([2, 67,1],[2, 3,1]));
var test=_.differenceBy([2.1, 1.2,5.3], [2.8, 3.4], Math.floor);
console.log(test);
var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
   
 console.log( _.dropRightWhile(users, function(o) { return !o.active ; }));
  // => objects for ['barney']
   
  // The `_.matches` iteratee shorthand.
  console.log(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }));
  // => objects for ['barney', 'fred']
   
  // The `_.matchesProperty` iteratee shorthand.
  console.log(_.dropRightWhile(users, ['active', false]));
  // => objects for ['barney']
   
  // The `_.property` iteratee shorthand.
  _.dropRightWhile(users, 'active');
  // => objects for ['barney', 'fred', 'pebbles']
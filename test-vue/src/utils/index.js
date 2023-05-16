
import * as test from './test.js'
export const a =2;

// if dont have export,other file can not import. can not read. mean this is private
const abc = 33

// defaut means the default export of the package
// Here I added abc, and exported all the public things in the test.js file. 
// In this way, I don’t need to import what I want to use through test.js, but only through index.js
export default  {
    abc,
    // this line mean exported all the public things in the test.js file
    ...test
}
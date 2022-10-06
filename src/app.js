// import React from 'react';
// import Navbar from './components/navbar';

// function App() {
//     return (
//         <React.Fragment>
//             <Navbar />
//         </React.Fragment>
//     );
// }

// export default App;

var numbers = [1, 2, 3, 4, 5, 6];

var result = numbers.find(function (currentValue) {
    return currentValue > 4;
});
console.log(result);
// import React, { useState, useEffect } from 'react';
// import swal from 'sweetalert';

// function ForSweertAlartDropDown() {
//   const [employeeData, setEmployeeData] = useState([]);
//   const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(0);

//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       const response = await fetch('https://restaurantapi.bssoln.com/api/Employee/datatable');
//       const data = await response.json();
//       setEmployeeData(data);
//     };

//     fetchEmployeeData();
//   }, []);

//   const handleSelectAlert = async () => {
//     const result = await swal({
//       title: 'Select an Employee',
//       content: (
//         <select value={selectedEmployeeIndex} onChange={(e) => setSelectedEmployeeIndex(Number(e.target.value))}>
//           {employeeData.map((option, i) => (
//             <option key={i} value={i}>
//               {option.user.fullName}
//             </option>
//           ))}
//         </select>
//       ),
//       buttons: {
//         cancel: 'Cancel',
//         confirm: 'Select',
//       },
//     });

//     if (result) {
//       const selectedEmployee = employeeData[selectedEmployeeIndex].user.fullName;
//       swal(`You selected: ${selectedEmployee}`);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleSelectAlert}>Show Select Alert</button>
//     </div>
//   );
// }

// export default ForSweertAlartDropDown;



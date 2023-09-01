// import React, { useState } from 'react';
// import axios from 'axios';
// function AssingNewEmployee(props) {
//   const [formData, setFormData] = useState({
//     designation: '',
//     joinDate: '2023-08-17T08:44:36.873Z',
//     email: '0',
//     phoneNumber: '0',
//     firstName: '0',
//     middleName: '0',
//     lastName: '',
//     fatherName: '',
//     motherName: '',
//     fatherName: '',
//     spouseName: '',
//     dob: '2023-08-17T08:44:36.873Z',
//     nid: '',
//     genderId: '0',
//     image: '',
//     base64: '',
//   });
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormData({
//       name: e.target.name.value,
//       description: e.target.description.value,
//       price: e.target.price.value,
//       discountType: e.target.discountType.value,
//       discount: e.target.discount.value,
//       discountPrice: e.target.discountPrice.value,
//       image: '',
//       base64: '',
//     });
//     console.log(formData)
//     try {
//       const response = await axios.post(
//         'https://restaurantapi.bssoln.com/api/Food/create',
//         formData
//       );
//       console.log('Response:', response.data);
//     } catch (error)  {
//       console.error('Error:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <h2>Create Food</h2>
//       <form className='inputborder' onSubmit={handleSubmit}>
//       <label>
//     Name:
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//          </label>
//          <label>
// Description:
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//          </label>
        

//         <label>
//           Price
//         <input
//           type="number"
//           name="price"
//           placeholder="price"
//           value={formData.price}
//           onChange={handleChange}
//         />

//         </label>
//         <label htmlFor=""> DiscountType<input
//           type="text"
//           name="discountType"
//           placeholder="discountType"
//           value={formData.discountType}
//           onChange={handleChange}
//         /></label>
//        <label htmlFor=""> Discount
//        <input
//           type="number"
//           name="discount"
//           placeholder="discount"
//           value={formData.discount}
//           onChange={handleChange}
//         />
//        </label>
//        <label htmlFor=""> DiscountPrice</label>
//         <input
//           type="number"
//           name="discountPrice"
//           placeholder="discountPrice"
//           value={formData.discountPrice}
//           onChange={handleChange}
//         />
        
//         <button className="btn-shadow d-inline-flex align-items-center btn btn-success" onSubmit={handleSubmit} type="submit">
          
//         <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z"/></svg>
//           Create</button>
//       </form>
//     </div>
//   );
// }

// export default AssingNewEmployee;



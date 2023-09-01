import React, { useState } from "react";
import axios from "axios";
import SearchLefNav from "./SearchLefNav";
import SearchNav from "./SearchNav";
import swal from "sweetalert";
function CreateFood(props) {
  let imageName = '';
  let imageBase64 = '';
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "0",
    discountType: "0",
    discount: "0",
    discountPrice: "0",
    image: "",
    base64: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    console.log('entered')
    const file = event.target.files[0];
    console.log(file)
    setFormData ({
       ...formData,
      image: file.name
    })

    imageName = file; 
    console.log(imageName)
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
    const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) =>{ 
        setFormData ({
          ...formData,
          image: file.name,
          base64: e.target.result
        })
      }
  };
  const handleSubmit = async (e) =>  {
    e.preventDefault();

    setFormData({ 
      ...formData
    });
    console.log(formData);
    try {
      const response = await axios.post(
        "https://restaurantapi.bssoln.com/api/Food/create",
        formData
        
      );
      console.log(formData);
      console.log("Response:", response.data.data);
      swal("uploaded successfully!");
    } catch (error) {
      console.error("Error:", error);
      swal("upload failed.");
    }
   
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  };

  return (
    <div>
      <div className="body2">
        <div id="app1">
          <div className="app-container app-theme-white">
            <SearchNav />
            <SearchLefNav />
            <div className="app-main__outer">
              <div className="app-main__inner">
                <div>
                  <div className="row3">
                    <div className="col-sm-12 col-lg-12">
                      <div className="card-hover-shadow-2x mb-3 card">
                        <div className="card-body">
                          <h2>Create Food</h2>

                          <form className="inputborder" onSubmit={handleSubmit}>
                            <div className="d-flex">

                            <div>

                           <div className="inputborderr">
                           <label >
                             Food Name:
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </label>
                           </div>

                           <div className="inputborderr">

                            <label>
                            Description:
                              <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleChange}
                              />
                            </label>
                           </div>
                            </div>
                            <div className="mx-4 my-1">

                            {selectedImage ? 
                            <img 
                            src={selectedImage}
                            alt="Selecteddd"
                            style={{
                              height: "185px",
                              maxWidth: "245px",
                            }}
                          /> :
                          <div class="custom-div text-center" style={{ width:" 245px",
                            height: "185px",
                            backgroundColor: "lightgray"}}><h5>{selectedImage}Add Food Image</h5></div>
                            
                              }
                            </div>
                            </div>

                            <label>
                              Price
                              <input
                                type="number"
                                name="price"
                                placeholder="price"
                                value={formData.price}
                                onChange={handleChange}
                              />
                            </label>
                            <label htmlFor="">
                              {" "}
                              DiscountType
                              <input
                                type="text"
                                name="discountType"
                                placeholder="discountType"
                                value={formData.discountType}
                                onChange={handleChange}
                              />
                                <select
                                onChange={handleChange}
                                >
                                  <option>None</option>;<option>Flat</option>;
                                  <option>Percentage</option>;
                                </select>
                              
                            </label>
                            <label htmlFor="">
                              {" "}
                              Discount
                              <input
                                type="number"
                                name="discount"
                                placeholder="discount"
                                value={formData.discount}
                                onChange={handleChange}
                              />
                            </label>
                            <label htmlFor="">
                              {" "}
                              DiscountPrice
                              <input
                                type="number"
                                name="discountPrice"
                                placeholder="discountPrice"
                                value={formData.discountPrice}
                                onChange={handleChange}
                              />
                            </label>
                            <label >
                              <input
                                type="file"
                                accept="image/*"
                                // value={formData.image}
                                onChange={handleImageChange}
                              />
                              {/* {selectedImage && (
                                <img
                                  src={selectedImage}
                                  alt="Selected"
                                  style={{
                                    border: "2px solid black",
                                    maxWidth: "20%",
                                  }}
                                />
                              )} */}
                            </label>

                            <button
                              className="btn-shadow d-inline-flex align-items-center btn btn-success"
                              onSubmit={handleSubmit}
                              type="submit"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 576 512"
                              >
                                <path d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z" />
                              </svg>
                              Create
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-footer">
                <div className="app-footer__inner text-center">
                  DashboardBss.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <h2>Create Food</h2>
  //     <form className="inputborder" onSubmit={handleSubmit}>
  //       <label>
  //         Name:
  //         <input
  //           type="text"
  //           name="name"
  //           placeholder="Name"
  //           value={formData.name}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label>
  //         Description:
  //         <input
  //           type="text"
  //           name="description"
  //           placeholder="Description"
  //           value={formData.description}
  //           onChange={handleChange}
  //         />
  //       </label>

  //       <label>
  //         Price
  //         <input
  //           type="number"
  //           name="price"
  //           placeholder="price"
  //           value={formData.price}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label htmlFor="">
  //         {" "}
  //         DiscountType
  //         <input
  //           type="text"
  //           name="discountType"
  //           placeholder="discountType"
  //           value={formData.discountType}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label htmlFor="">
  //         {" "}
  //         Discount
  //         <input
  //           type="number"
  //           name="discount"
  //           placeholder="discount"
  //           value={formData.discount}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label htmlFor=""> DiscountPrice</label>
  //       <input
  //         type="number"
  //         name="discountPrice"
  //         placeholder="discountPrice"
  //         value={formData.discountPrice}
  //         onChange={handleChange}
  //       />

  //       <button
  //         className="btn-shadow d-inline-flex align-items-center btn btn-success"
  //         onSubmit={handleSubmit}
  //         type="submit"
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           height="1em"
  //           viewBox="0 0 576 512"
  //         >
  //           <path d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z" />
  //         </svg>
  //         Create
  //       </button>
  //     </form>
  //   </div>
  // );
}

export default CreateFood;

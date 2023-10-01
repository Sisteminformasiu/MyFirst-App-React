import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddData } from "../features/listProductSlice";

const Form = () => {
  const dispacth = useDispatch();
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [imageOfProduct, setImageOfProduct] = useState("");
  const [productFreshness, setProductFreshness] = useState(0);
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [state, setState] = useState({
    productNameError: "",
    error: "",
    errorName: "",
    errorPrice: "",
    errorImage: "",
    namePattern: /^[a-zA-Z0-9\s]+$/,
    pricePattern: /^\$?\d+(\.\d{1,2})?$/,
    allowedExtension: ["jpg", "jpeg", "png"],
  });

  const validateName = () => {
    const { namePattern } = state;
    if (!namePattern.test(productName)) {
      setState({
        ...state,
        errorName: "Nama produk hanya boleh berisi huruf, angka, dan spasi.",
      });
    } else if (productName.length >= 25) {
      setState({
        ...state,
        errorName: "Nama produk tidak boleh lebih dari 25 karakter",
      });
    } else if (productName.length <= 1) {
      setState({ ...state, errorName: "Nama produk tidak boleh kosong" });
    } else {
      setState({ ...state, errorName: "" });
    }
  };

  const validatePrice = () => {
    const { pricePattern } = state;
    if (!pricePattern.test(productPrice)) {
      setState({
        ...state,
        errorPrice:
          "Harga produk tidak valid. Format yang benar adalah $X atau X.XX",
      });
      return false;
    }
    setState({ ...state, errorPrice: "" });
    return true;
  };

  const validateImage = (e) => {
    const { allowedExtension } = state;
    const file = e?.target?.files[0];
    if (!file) {
      setState({
        ...state,
        errorImage: "Anda harus memilih gambar produk.",
      });
      return false;
    }

    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (!allowedExtension.includes(fileExtension)) {
      setState({
        ...state,
        errorImage:
          "Format gambar tidak valid. Hanya format JPG, JPEG, PNG, dan GIF yang diizinkan.",
      });
      return false;
    }
    setState({ ...state, errorImage: "" });
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "productName") {
      setProductName(value);
      validateName();
    } else if (name === "productCategory") {
      setProductCategory(value);
    } else if (name === "imageOfProduct") {
      setImageOfProduct(value);
      validateImage(e);
    } else if (name === "productFreshness") {
      setProductFreshness(value);
    } else if (name === "additionalDescription") {
      setAdditionalDescription(value);
    } else if (name === "productPrice") {
      setProductPrice(value);
      validatePrice();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isInputEmpty =
      productName &&
      productCategory &&
      imageOfProduct &&
      productFreshness &&
      additionalDescription &&
      productPrice;
    if (isInputEmpty) {
      const newDataProduct = {
        productName: productName,
        productCategory: productCategory,
        imageOfProduct: imageOfProduct,
        productFreshness: productFreshness,
        additionalDescription: additionalDescription,
        productPrice: productPrice,
      };
      dispacth(handleAddData(newDataProduct));
      setProductName("");
      setProductCategory("");
      setImageOfProduct("");
      setProductFreshness("");
      setAdditionalDescription("");
      setProductPrice("");
      setState({ ...state, error: "" });
    } else {
      setState({ ...state, error: "Masih ada kolom yang belum terisi !!!" });
    }
  };

  const { error, errorName, errorPrice, errorImage } = state;

  return (
    <div className="absolute top-96 w-screen h-screen flex justify-center flex-col items-center py-96">
      <form onSubmit={handleSubmit} action="#" className="py-6">
        <div className="mr-40">
          <div className="text-2xl font-medium text-black mb-2">
            Detail Product
          </div>
          <div className="flex flex-col">
            <label htmlFor="productName">Product name</label>
            <input
              id="productName"
              onChange={handleChange}
              className={`focus:outline-none pl-5 mt-2 border border-slate-500 rounded-md rounded-md w-96 h-10`}
              type="text"
              value={productName}
              name="productName"
            />
            {errorName && <div className="text-red-500">{errorName}</div>}
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="productCategory">Product Category</label>
            <select
              id="productCategory"
              onChange={handleChange}
              className="focus:outline-none mt-2 border border-slate-500 rounded-md rounded-md w-96 h-10"
              name="productCategory"
              value={productCategory}
            >
              <option>Choose..</option>
              <option value="category 1">category 1</option>
              <option value="category 2">category 2</option>
              <option value="category 3">category 3</option>
            </select>
          </div>
          <div className="flex flex-col pt-4">
            <label>Image of product</label>
            <input
              onChange={handleChange}
              className="focus:outline-none mt-2 border border-slate-500 rounded-md w-96 h-8"
              type="file"
              accept=".png, .jpeg, .jpg"
              name="imageOfProduct"
              defaultValue={imageOfProduct}
            />
          </div>
          {errorImage && <div className="text-red-500">{errorImage}</div>}
          <div className="pt-4">
            <label>Product freshness</label>
            <br />
            <input
              onChange={handleChange}
              value={"Brand New"}
              type="radio"
              name="productFreshness"
            />
            <label className="pl-1">Brand new</label>

            <br />
            <input
              onChange={handleChange}
              value={"Second Hand"}
              type="radio"
              name="productFreshness"
            />
            <label className="pl-1">Second hand</label>

            <br />
            <input
              onChange={handleChange}
              value={"Refufbished"}
              type="radio"
              name="productFreshness"
            />
            <label className="pl-1">Refurbished</label>
          </div>
          <div className="flex flex-col">
            <label>Additional description</label>
            <textarea
              onChange={handleChange}
              className="focus:outline-none pl-5 pt-2 mt-2 border border-slate-500 rounded-md"
              rows="4"
              value={additionalDescription}
              name="additionalDescription"
            ></textarea>
          </div>
          <div className="flex flex-col pt-4">
            <label>Product price</label>
            <input
              onChange={handleChange}
              className="focus:outline-none pl-5 mt-2 border border-slate-500 rounded-md rounded-md w-96 h-10"
              type="text"
              placeholder="$1"
              value={productPrice}
              name="productPrice"
            />
          </div>
          {errorPrice && <div className="text-red-500">{errorPrice}</div>}
          {error && <div className="text-red-500">{error}</div>}
        </div>
        <div className="mt-5 bg-blue-600 text-center text-white rounded-md">
          <button
            className="w-96 focus:outline-none"
            type="submit"
            style={{ width: 550 }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

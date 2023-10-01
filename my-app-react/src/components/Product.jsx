import { useLocation, useNavigate } from "react-router-dom";

function InfoProduct() {
  const { state } = useLocation();
  const productData = state && state.productData;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold font-mono">Product Information</h1>
      {productData ? (
        <div className="flex flex-row-reverse items-start font-mono bg-gray-50 rounded-md shadow-md">
          <div className="m-7">
            <h2 className="text-4xl">{productData.productName}</h2>
            <p>Category Product: {productData.productCategory}</p>
            <p>Product Freshness: {productData.productFreshness}</p>
            <p>Description: {productData.additionalDescription}</p>
            <p>Price Product: {productData.productPrice}</p>
          </div>
          <div className="m-2">
            <p>
              {productData.imageOfProduct && (
                <img
                  src={productData.imageOfProduct}
                  alt={productData.productName}
                  width={200}
                  height={200}
                />
              )}
            </p>
          </div>
        </div>
      ) : (
        <div
          className="w-96 h-20 relative top-80 flex justify-center items-center 
        mx-auto bg-gray-100 rounded-md shadow-md text-2xl text-center text-black"
        >
          <p>Data produk tidak ditemukan.</p>
        </div>
      )}
      <div>
        <button
          onClick={goBack}
          className="rounded-full mt-2 text-white font-semibold bg-blue-800 
          focus:outline-none border-none hover:bg-orange-500"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default InfoProduct;

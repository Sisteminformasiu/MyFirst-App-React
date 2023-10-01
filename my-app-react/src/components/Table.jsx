import { useSelector, useDispatch } from "react-redux";
import { handleDelete } from "../features/listProductSlice";

import ListProduct from "./ListProduct";
import Swal from "sweetalert2";

const Table = () => {
  const listData = useSelector((state) => state.listProduct.listData);
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(handleDelete(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div
      style={{ position: "relative", top: 1190 }}
      className="absolute bottom-0 w-screen pb-16"
    >
      <h2 className="text-center text-4xl mb-5 font-medium text-black">
        List Product
      </h2>
      <table className="mx-auto border border-gray-300">
        <thead className="h-16">
          <tr className="h-10">
            <th className="pr-12 pl-5">No</th>
            <th className="pr-12">Product Name</th>
            <th className="pr-12">Product Category</th>
            <th className="pr-12">Image Of Product</th>
            <th className="pr-12">Product Freshness</th>
            <th className="pr-12">Additional Description</th>
            <th className="pr-12">Product Price</th>
            <th className="pr-12">Actions</th>
          </tr>
        </thead>
        {listData.map((passenger) => (
          <ListProduct
            key={passenger.id}
            item={passenger}
            handleDelete={handleDeleteItem}
          />
        ))}
      </table>
    </div>
  );
};

export default Table;

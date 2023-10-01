import { useNavigate } from "react-router-dom";

const ListProduct = ({ item, handleDelete }) => {
  const navigate = useNavigate();

  const action = () => {
    navigate(`/InfoProduct/${item.id}`, { state: { productData: item } });
  };

  return (
    <tbody>
      <tr className="mx-auto border border-gray-300">
        <td className="text-center">{item.id}</td>
        <td className="cursor-pointer" onClick={action}>
          {item.productName}
        </td>
        <td>{item.productCategory}</td>
        <td>
          {item.imageOfProduct && (
            <img
              src={item.imageOfProduct}
              alt={item.productName}
              width={50}
              height={50}
            />
          )}
        </td>
        <td>{item.productFreshness}</td>
        <td>{item.additionalDescription}</td>
        <td>{item.productPrice}</td>
        <td className="p-3 ">
          <button className="bg-green-400 text-white h-10 mr-2">Edit</button>
          <button
            className="bg-red-400 text-white h-10"
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ListProduct;

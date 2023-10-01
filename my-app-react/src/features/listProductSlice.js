import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialValue = [
  {
    id: uuidv4().substring(0, 2),
    No: 1,
    productName: "Milo",
    productCategory: "Category 1",
    imageOfProduct:
      "https://tse3.mm.bing.net/th?id=OIP.1Pu4WYZohCVRi0-gIuz0QQHaKi&pid=Api&P=0&h=220",
    productFreshness: "Refurbished",
    additionalDescription: "Susu Kotak",
    productPrice: "$1",
  },
  {
    id: uuidv4().substring(0, 2),
    No: 2,
    productName: "Rinso",
    productCategory: "Category 3",
    imageOfProduct:
      "https://tse4.mm.bing.net/th?id=OIP.uVq2jSxwkTaCG0VBSOBC3gHaHa&pid=Api&P=0&h=220",
    productFreshness: "Brand New",
    additionalDescription: "Sabun cuci Pakaian",
    productPrice: "$2",
  },
  {
    id: uuidv4().substring(0, 2),
    No: 3,
    productName: "Indomie",
    productCategory: "Category 2",
    imageOfProduct:
      "https://tse4.mm.bing.net/th?id=OIP.dgMZXTGeqz-RCa8ELEoV8wHaFd&pid=Api&P=0&h=220",
    productFreshness: "Second Hand",
    additionalDescription: "Mie Goreng Instan",
    productPrice: "$3",
  },
];

const listProductSlice = createSlice({
  name: "listProduct",
  initialState: {
    listData: initialValue,
  },
  reducers: {
    handleDelete: (state, action) => {
      state.listData = state.listData.filter((item) => {
        return item.id !== action.payload;
      });
    },

    handleAddData: (state, action) => {
      const newData = {
        id: uuidv4().substring(0, 2),
        ...action.payload,
      };
      state.listData = [...state.listData, newData];
    },
  },
});

export const { handleDelete, handleAddData } = listProductSlice.actions;
export default listProductSlice.reducer;

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../../store";

import Form from "../../../components/Form";

describe("Create Product form test", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Form />
        </PersistGate>
      </Provider>
    );
  });
  test("Input text for product name", () => {
    const productNameInput = screen.getByLabelText("Product name");
    fireEvent.change(productNameInput, {
      target: { value: "Milo" },
    });
    expect(productNameInput).toHaveValue("Milo");
  });

  test("selecting and displaying form choices", () => {
    const productCategorySelect = screen.getByLabelText("Product Category");
    fireEvent.change(productCategorySelect, {
      target: { value: "category 3" },
    });
    expect(productCategorySelect).toHaveValue("category 3");
  });
});

describe("Form validation test", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Form />
        </PersistGate>
      </Provider>
    );
  });

  test("Product name should not be empty", () => {
    const productNameInput = screen.getByLabelText("Product name");
    fireEvent.change(productNameInput, {
      target: { value: "" },
    });
    const errorMessage = screen.getByLabelText("Product name");
    expect(productNameInput).toHaveValue("");
    expect(errorMessage).toBeInTheDocument("Nama produk tidak boleh kosong");
  });

  test("Product name cannot contain the character @ # { } ", () => {
    const productNameInput = screen.getByLabelText("Product name");
    fireEvent.change(productNameInput, {
      target: { value: "Milo@@" },
    });
    const errorMessage = screen.getByLabelText("Product name");
    expect(productNameInput).toHaveValue("Milo@@");
    expect(errorMessage).toBeInTheDocument(
      "Nama produk hanya boleh berisi huruf, angka, dan spasi."
    );
  });

  test("Product name cannot be more than 25 character ", () => {
    const productNameInput = screen.getByLabelText("Product name");
    fireEvent.change(productNameInput, {
      target: { value: "Milo56789101112131415161718" },
    });
    const errorMessage = screen.getByLabelText("Product name");
    expect(productNameInput).toHaveValue("Milo56789101112131415161718");
    expect(errorMessage).toBeInTheDocument(
      "Nama produk tidak boleh lebih dari 25 karakter"
    );
  });

  test("All form fields must not be empty when submit", () => {
    const allFormField = screen.getByLabelText(
      "Product name",
      "Product Category",
      "Image of product",
      "Product freshness",
      "Additional description",
      "Product price"
    );
    fireEvent.click(allFormField, {
      target: { value: "" },
    });
    const errorMessage = screen.getByLabelText(
      "Product name",
      "Product Category",
      "Image of product",
      "Product freshness",
      "Additional description",
      "Product price"
    );
    expect(allFormField).toHaveValue("");
    expect(errorMessage).toBeInTheDocument(
      "Masih ada kolom yang belum terisi !!!"
    );
  });
});

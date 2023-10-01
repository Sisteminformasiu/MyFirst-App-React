import { useEffect } from "react";
import Table from "../../components/Table";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import HeaderCreate from "../../components/Headercreateproduct";
import Swal from "sweetalert2";

function CreateProduct() {
  useEffect(() => {
    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Wellcome To Create Product",
        showConfirmButton: false,
        timer: 2000,
      });
    }, 800);
  }, []);

  return (
    <div>
      <div>
        <Navbar
          home={"Home"}
          features={"Features"}
          pricing={"Pricing"}
          faqs={"FAQs"}
          about={"About"}
        />{" "}
      </div>
      <div>
        <HeaderCreate />
      </div>
      <div>
        <Table />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default CreateProduct;

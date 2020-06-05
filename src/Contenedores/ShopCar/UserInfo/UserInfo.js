import React, { useState } from "react";
import CartWrapper from "../../../Componentes/ShopCar/CartWrapper/CartWrapper";
import Input from "../../../Componentes/UI/Input/Input";
import Boton from "../../../Componentes/UI/Botones/Boton";
import { withRouter } from "react-router-dom";
import Modal from "../../../Componentes/UI/Modal/Modal";
import CheckOut from "../../../Componentes/CheckOut/CheckOut";

const UserInfo = (props) => {
  const [form, setForm] = useState({
    Nombre: {
      config: {
        placeholder: "Nombre",
        required: true,
      },
      value: "",
    },
    Apellido: {
      config: {
        placeholder: "Apellido",
        required: true,
      },
      value: "",
    },
    Email: {
      config: {
        placeholder: "Email",
        required: true,
        type: "email",
      },
      value: "",
    },
    Calle: {
      config: {
        placeholder: "Calle",
        required: true,
        type: "text",
      },
      value: "",
    },
    Colonia: {
      config: {
        placeholder: "Colonia",
        required: true,
      },
      value: "",
    },
    Estado: {
      config: {
        placeholder: "Estado",
        required: true,
      },
      value: "",
    },

    Ciudad: {
      config: {
        placeholder: "Ciudad",
        required: true,
      },
      value: "",
    },
    CodigoPostal: {
      config: {
        placeholder: "Codigo Postal",
        required: true,
      },
      value: "",
    },
  });

  const [modal, setModal] = useState(false);
  const [orderPlaced, setOrder] = useState(false);

  const Order = (e) => {
    e.preventDefault();

    const userData = {
      Nombre: form["Nombre"].value,
      Calle: form["Calle"].value,
      Colonia: form["Colonia"].value,
      CodigoPostal: form["CodigoPostal"].value,
      Apellido: form["Apellido"].value,
      Ciudad: form["Ciudad"].value,
      Estado: form["Estado"].value,
    };
    setModal(true);
    setOrder(userData);
    console.log(userData);
  };
  const placed = () => {
    setTimeout(() => {
      props.history.push("/");
    }, 2000);
  };

  const changeInput = (e, field) => {
    e.preventDefault();
    let formUpdated = { ...form };
    formUpdated[field].value = e.target.value;
    setForm(formUpdated);
  };

  let inputs = [];
  for (let key in form) {
    inputs.push({
      id: key,
      config: {
        ...form[key].config,
      },
      value: form[key].value,
    });
  }

  return (
    <CartWrapper>
      <form onSubmit={Order}>
        {inputs.map((field) => {
          return (
            <Input
              key={field.id}
              config={field.config}
              change={(e) => changeInput(e, field.id)}
              value={field.value}
            />
          );
        })}
        <Boton type="CheckOut" disabled={props.loading ? true : false}>
          Ordernar
        </Boton>
      </form>

      <Modal show={modal} close={() => setModal(!modal)}>
        {orderPlaced && <CheckOut userData={orderPlaced} placed={placed} />}
      </Modal>
    </CartWrapper>
  );
};

export default withRouter(UserInfo);

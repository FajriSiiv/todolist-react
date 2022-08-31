import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { TambahUser } from "./userSlice";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    swal({
      title: "Isi semua form",
      icon: "warning",
      timer: 1000,
      button: "Mengerti",
    });
    if (values.name && values.email !== "") {
      dispatch(
        TambahUser({
          id: uuidv4(),
          name: values.name,
          email: values.email,
        })
      );
      swal({
        title: "Terimakasih",
        icon: "success",
        timer: 1000,
        button: "Kembali",
      }).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="name"
        inputProps={{ type: "text", placeholder: "Work" }}
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br />
      <TextField
        label="goals"
        inputProps={{ type: "text", placeholder: "Goals" }}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;

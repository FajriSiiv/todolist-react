import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { UbahUser } from "./userSlice";

const EditUser = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const existingUser = users.filter((x) => x.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });
  const handleEditUser = () => {
    if (values.name !== "") {
      dispatch(
        UbahUser({
          id: params.id,
          name: values.name,
          email: values.email,
        })
      );
      swal({
        title: "Ubah Data!",
        icon: "success",
        button: "Kembali",
        timer: 500,
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
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;

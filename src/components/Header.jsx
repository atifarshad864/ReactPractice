import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Fields from "./Fields";
const Header = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeitem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="input">
        <Stack direction="row" spacing={4} justifyContent="center">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Enter Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
          />
          <Button variant="contained" onClick={addData}>
            Add
          </Button>
        </Stack>
      </div>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <Fields index={index} name={element.name} email={element.email} />
            <Button variant="contained" onClick={() => removeitem(index)}>
              -
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Header;

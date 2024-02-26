import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const Fields = ({ name, email }) => {
  return (
    <div className="head">
      <div>
        <Stack direction="row" spacing={4} justifyContent="center">
          <div className="head">
            <h4>{name}</h4>
            <h4>{email}</h4>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default Fields;

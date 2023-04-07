import { Select } from "@mui/material";
import React from "react";

function dropdown() {
  return (
    <div>
      <p></p>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        // onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
}

export default dropdown;

import { Box, Button } from "@material-ui/core";
import React from "react";

function Todo({ todo }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.15rem",
        }}
      >
        <p style={{ padding: "0.5rem" }}>{todo} </p>
        <Box display="flex" flexDirection="row" justifyContent="flex-end">
          <Button size="large" color="primary">
            ✔
          </Button>
          <Button size="large" color="secondary">
            ❌
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Todo;

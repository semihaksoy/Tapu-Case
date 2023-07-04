import { TextField } from "@mui/material";

function TextFieldComponent(props: any) {
  return (
      <TextField
          variant="standard"
          sx={{ width: "100%", maxWidth: "400px", minHeight: "56px" }}
          {...props}
      />
  );
}

export default TextFieldComponent;
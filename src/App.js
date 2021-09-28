import "./App.scss";
import { useState } from "react";
import { Button, Box, Grid, TextField } from "@mui/material";
import SimpleInput from "./components/SimpleInput";

const App = () => {
  const [findValue, setFindValue] = useState("");
  const [replaceValue, setReplaceValue] = useState("");
  const [dataValue, setDataValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let re = new RegExp(findValue, "g");
    setDataValue(dataValue.replaceAll(re, replaceValue));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(dataValue);
  };

  return (
    <Box className="App" component="form" noValidate autoComplete="off">
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={4}>
          <SimpleInput
            name="find"
            value={findValue}
            onChange={(e) => setFindValue(e.target.value)}
            onClear={() => setFindValue("")}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleInput
            name="replace"
            value={replaceValue}
            onChange={(e) => setReplaceValue(e.target.value)}
            onClear={() => setReplaceValue("")}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="data-textarea"
            label="Data"
            multiline
            rows={10}
            fullWidth
            value={dataValue}
            onChange={(e) => setDataValue(e.target.value)}
          />
        </Grid>
        <Grid container item spacing={2} justifyContent="flex-end" xs={8}>
          <Grid item>
            <Button variant="contained" onClick={handleCopy}>
              Copy data
            </Button>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Go
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;

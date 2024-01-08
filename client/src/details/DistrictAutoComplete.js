import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function MandalAutoComplete() {
  return (
    <Autocomplete
      id="mondal-select"
      sx={{ width: 300 }}
      options={Mandals}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a mandal"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const Mandals = [
  { label: "Adilabad" },
  {
    label: "Kumuram Bheem",
  },
  { label: "Narayankhed" },
  { label: "Mancherial" },
  {
    label: "Nirmal",
  },
  { label: "Nizamabad" },
  { label: "Jagtial" },
  { label: "Peddapalli" },
  { label: "Jayashankar" },
  { label: "Bhadradri Kothagudem" },
  { label: "Mahabubabad" },
  { label: "Warangal Rural" },
  { label: "Warangal Urban" },
  {
    label: "Karimnagar",
  },
  { label: "Rajanna Siricilla" },
  { label: "Kamareddy" },
  { label: "Sangareddy" },
  {
    label: "Medak",
  },
  { label: "Siddipet" },
  { label: "Jangaon" },
  { label: "Yadadri Bhuvanagiri" },
  { label: "Medchal-Malkajgiri" },
  { label: "Hyderabad" },
  { label: "Rangareddy" },
  { label: "Vikarabad" },
  { label: "Mahabubnagar" },
  { label: "Jogulamba Gadwal" },
  { label: "Wanaparthy" },
  { label: "Nagarkurnool" },
  { label: "Nalgonda" },
  { label: "Suryapet" },
  { label: "Khammam" },
  { label: "Mulugu" },
  { label: "Narayanpet" },
];

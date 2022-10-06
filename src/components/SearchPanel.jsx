import React from "react";
import {
  Button,
  Input,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Container = styled(Stack)({
  color: "white",
  backgroundColor: "#002A3B",
  padding: "2rem",
  justifyContent: "center",
  alignItems: "center",
});

const FilterPanelBtn = styled(Button)({
  color: "black",
  backgroundColor: "white",
  padding: "0rem 1rem",
  borderRadius: ".6rem",
  "&:hover": {
    color: "white",
    backgroundColor: "black",
  },
});
const SearchPanel = () => {
  return (
    <Container>
      <Typography padding="2rem 0" paddingBottom="5rem" variant="h4">
        Explore Challenges
      </Typography>
      <Stack minWidth="800px" flexDirection="row" gap="1rem">
        <Input
          className="searchInput"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <AiOutlineSearch size={"1.2rem"} />
            </InputAdornment>
          }
          placeholder="Search"
        />
        <FilterPanelBtn endIcon={<BsChevronDown />}>Filter </FilterPanelBtn>
      </Stack>
    </Container>
  );
};

export default SearchPanel;

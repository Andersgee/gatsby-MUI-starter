import React from "react";
import { Container, Typography } from "@material-ui/core";
import Stuff from "./Stuff";

export default function Index() {
  return (
    <Container>
      <Typography variant="h4" align="center">
        react + gatsby + materialUI starter
      </Typography>
      <Stuff />
    </Container>
  );
}

import React from "react";
import Button from "@material-ui/core/Button";
import useStyle from "./style";

export default function Material() {
  const classes = useStyle();

  return (
    <div className={classes.content}>
      <h3 className={classes.title}>Material</h3>
      <span>Demo Material</span>
      <Button variant="contained" color="secondary">
        Primary
      </Button>
    </div>
  );
}

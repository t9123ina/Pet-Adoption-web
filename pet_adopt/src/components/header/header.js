import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { StyledBreadcrumb } from "../common/customisedUI";
import HomeIcon from "@material-ui/icons/Home";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PetsIcon from "@material-ui/icons/Pets";
import Typography from "@material-ui/core/Typography";
const Header = props => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography component="h3" variant="h3">
        Pet Adoption
      </Typography>
      <StyledBreadcrumb
        component="a"
        href="/#"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
      />
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Adopt"
        icon={<PetsIcon fontSize="small" />}
      />
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Apply"
        icon={<ListAltIcon fontSize="small" />}
      />
    </Breadcrumbs>
  );
};

export default Header;

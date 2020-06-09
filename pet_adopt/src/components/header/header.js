import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { StyleHeaderTypography,StyledBreadcrumb } from "../common/customisedUI";
import HomeIcon from "@material-ui/icons/Home";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PetsIcon from "@material-ui/icons/Pets";
import Container from "@material-ui/core/Container";
const Header = props => {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <StyleHeaderTypography component="h3" variant="h3">
          UoB Pet Adoption <PetsIcon fontSize="large" />
        </StyleHeaderTypography>
        <StyledBreadcrumb
          component="a"
          href="/"
          label="Home"
          icon={<HomeIcon fontSize="small" style={{ color: '#ffffff' }}/>}
        />
        <StyledBreadcrumb
          component="a"
          href="/adopt"
          label="Adopt"
          icon={<PetsIcon fontSize="small" style={{ color: '#ffffff' }}/>}
        />
        <StyledBreadcrumb
          component="a"
          href="/contact"
          label="Contact"
          icon={<ListAltIcon fontSize="small" style={{ color: '#ffffff' }}/>}
        />
      </Breadcrumbs>
    </Container>
  );
};

export default Header;

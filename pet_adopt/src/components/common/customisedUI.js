import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

import { emphasize, withStyles } from "@material-ui/core/styles";

export const StyledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: '#6a1b9a',
    height: theme.spacing(3.8),
    width: '8em',
    color: '#ffffff',
    fontWeight: "bold",
    fontSize: '1em',
    "&:hover, &:focus": {
      backgroundColor: '#e1bee7'
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize('#ce93d8', 0.12)
    }
  }
}))(Chip);

export const StyledchipsLabel = withStyles(theme => ({
  root: {
    backgroundColor: '#f3e5f5',
    marginRight: theme.spacing(1),
    color: '#dc004e',
    fontWeight: "bold"
  }
}))(Chip);

export const StyledCardHeader = withStyles(theme => ({
  avatar: {
    "& .MuiAvatar-root": {
      width: theme.spacing(20),
      height: theme.spacing(20),
      backgroundColor: '#6a1b9a'
    }
  }
}))(CardHeader);

export const StyledCardAction = withStyles(theme => ({
  root: {
  }
}))(CardActions);

export const StyledCard = withStyles(theme => ({
  root: {
    boxShadow: "none",
    marginRight:theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}))(Card);

export const StyleHeaderTypography = withStyles(theme => ({
  root: {
    color: '#6a1b9a',
    borderRadius: 3,
    fontFamily: 'Lobster',
    fontSize: '2.8rem'
  }
}))(Typography);

export const StyleBannerTypography = withStyles(theme => ({
  root: {
    fontFamily:'Courgette',
    textAlign: "center",
    fontSize: '2.4rem',
    fontWeight: "bold",
    color: '#6a1b9a'
  }
}))(Typography);

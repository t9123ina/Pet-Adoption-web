import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";

import { emphasize, withStyles } from "@material-ui/core/styles";

export const StyledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300]
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12)
    }
  }
}))(Chip);

export const StyledCardAction = withStyles(theme => ({
  root: {
    textAlign: "center"
  }
}))(CardActions);

export const StyledCard = withStyles(theme => ({
  root: {
    boxShadow: "none",
    marginBottom: theme.spacing(3)
  }
}))(Card);

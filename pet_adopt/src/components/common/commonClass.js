import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center"
  },
  card: {
    marginBottom: theme.spacing(3)
  },
  cardContent: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

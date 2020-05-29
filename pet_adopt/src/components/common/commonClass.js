import { makeStyles } from "@material-ui/core/styles";
import { maxWidth, border, borderRadius } from "@material-ui/system";

export const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center"
  },
  card: {
    marginBottom: theme.spacing(3)
  },
  searchForm: {
    "& .MuiTextField-root": {
      marginRight: theme.spacing(2),
      width: "25ch"
    }
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  cardMedia: {
    marginLeft: "auto",
    marginRight: "auto",
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  cardContent: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

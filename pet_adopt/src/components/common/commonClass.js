import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4)
  },

  title: {
    textAlign: "center"
  },
  subTitle: {
    paddingTop: theme.spacing(3)
  },
  card: {
    marginBottom: theme.spacing(3)
  },
  searchForm: {
    "& .MuiTextField-root": {
      marginRight: theme.spacing(3),
      width: "25ch",
    },
    marginLeft: theme.spacing(28)
  },
  media: {  
    width: "56%",
    marginLeft: theme.spacing(10),
    paddingTop: "56.25%" // 16:9
  },
  img: {
    height: "100px",
    maxWidth: "100%" // 16:9
  },
  cardContent: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  },
  chipsLabel: {
    marginRight: theme.spacing(1),
  },
  list: {
    paddingTop: theme.spacing(1)
  }
}));

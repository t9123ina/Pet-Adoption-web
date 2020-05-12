import React from "react";
import { useStyles } from "../common/commonClass";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
const infoList = [
  {
    title: "What We do",
    description:
      "This impressive paella is a perfect party dish and a fun\
       meal to cook together with your guests. \
    Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    title: "How We Work",
    description:
      "This impressive paella is a perfect party dish and a fun\
       meal to cook together with your guests. \
    Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    title: "What You Can Do",
    description:
      "This impressive paella is a perfect party dish and a fun\
       meal to cook together with your guests. \
    Add 1 cup of frozen peas along with the mussels, if you like."
  }
];
const Information = props => {
  const classes = useStyles();
  return (
    <>
      {infoList.map(row => (
        <Card className={classes.card}>
          <CardHeader
            title={
              <Typography className={classes.title}>{row.title}</Typography>
            }
          />

          <CardContent className={classes.cardContent}>
            <Typography variant="body2" color="textSecondary" component="p">
              {row.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Information;

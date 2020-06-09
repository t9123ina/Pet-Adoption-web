import React, { useEffect } from "react";
import { useStyles } from "../common/commonClass";
import { StyleBannerTypography } from "../common/customisedUI";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import ProtoTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import { API } from "../../apis/index";

const Information = props => {
  const { features } = props;
  const classes = useStyles();
  const length = features.length;
  useEffect(() => {}, [features]);
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <StyleBannerTypography component="h4" variant="h4">
          A platform for whom love the animal
        </StyleBannerTypography>
        <StyleBannerTypography component="h4" variant="h4" className={classes.subTitle}>
          No more animal will be homeless
        </StyleBannerTypography>
      </Grid>
      {features.map(row => (
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Card className={classes.card} key={row.id}>
            <CardHeader
              title={
                length !== 0 ? (
                  <Typography variant="h5" style={{ fontWeight: "bold" }} color="secondary" className={classes.title}>{row.title}</Typography>
                ) : (
                  <Skeleton variant="text" />
                )
              }
            />
            <CardMedia
              className={classes.media}
              image={`${API}${row.img_path}`}
              title={row.title}
            />
            <CardContent className={classes.cardContent}>
              {length !== 0 ? (
                <Typography variant="body2" color="textSecondary" component="p">
                  {row.description}
                </Typography>
              ) : (
                <Skeleton variant="text" />
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Information;

Information.protoTypes = {
  features: ProtoTypes.array.isRequired
};

import React from "react";

export default function CheckRatingAverage(rating) {
  let ratingClassName;
  if (rating < 3) {
    ratingClassName = "text-primary";
  } else if (rating >6) {
    ratingClassName = "text-success";
  } else {
    ratingClassName = "text-danger";
  }
  return <p className={ratingClassName}>{rating}</p>;
}

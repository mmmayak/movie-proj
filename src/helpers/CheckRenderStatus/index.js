import React from "react";
import Spinner from "../../components/UI/Spinner";

export default function CheckRenderStatus({ loading, error, items, children }) {
  let render;
  if (loading) {
    render = <Spinner />;
  } else if (error) {
    render = <div>error</div>;
  } else if (items && !!items.length) {
    render = children;
  }
  return <>{render}</>;
}

import React from "react";
import "./index.scss";

export default function Spinner() {
  return (
    <div className="spinner">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

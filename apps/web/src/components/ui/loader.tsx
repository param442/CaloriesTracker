import React from "react";
import { Spinner } from "./spinner";
import { Badge } from "./badge";
import { useState } from "react";

const Loader = () => {
  const [dot, addDot] = useState("");
  setTimeout(() => {
    if (dot.length >= 3) {
      addDot("");
    } else {
      addDot(dot + ".");
    }
  }, 1000);
  return (
    <>
      <Badge>
        <Spinner data-icon="inline-start" />
        Loading{dot}
      </Badge>
    </>
  );
};

export default Loader;

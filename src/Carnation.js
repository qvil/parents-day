import React from "react";

const Carnation = ({
  match: {
    params: { parent, child }
  }
}) => {
  return <div>{`parent: ${parent}, child: ${child}`}</div>;
};

export default Carnation;

import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completedtask = useSelector((state) =>
    state.list.filter((list) => list.completed === true)
  );
  return <h4 className="mt-3">Total Complete Items: {completedtask.length}</h4>;
};

export default TotalCompleteItems;

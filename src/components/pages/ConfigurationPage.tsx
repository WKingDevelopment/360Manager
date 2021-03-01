import React from "react";
import { ConfigurationTabs } from "./configuration/ConfigurationTabs";

const ConfigurationPage = () => {
  return (
    <div>
      <div className="page">
        <ConfigurationTabs />
      </div>
    </div>
  );
};

export { ConfigurationPage };

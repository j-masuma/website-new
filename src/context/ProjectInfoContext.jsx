import React, { createContext, useState, useContext } from "react";

// Create a context
const ProjectInfoContext = createContext();

// Create a provider component
const ProjectInfoProvider = ({ children }) => {
  const [info, setInfo] = useState([
    {
      id: 1,
      name: "Firsst First First",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 2,
      name: "Second Second Second",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 3,
      name: "3rd 3rd 3rd",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ]);

  return (
    <ProjectInfoContext.Provider value={{ info, setInfo }}>
      {children}
    </ProjectInfoContext.Provider>
  );
};

// Create a custom hook to consume the context
const useProjectInfoContext = () => {
  const context = useContext(ProjectInfoContext);
  if (!context) {
    throw new Error(
      "useProjectInfoContext must be used within a ProjectInfoProvider"
    );
  }
  return context;
};

export { ProjectInfoProvider, useProjectInfoContext };

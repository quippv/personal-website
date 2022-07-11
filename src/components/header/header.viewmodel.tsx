import { useState } from "react";

const useHeaderViewModel = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleOpenResume = () => {
    window &&
      window.open(process.env.NEXT_PUBLIC_HOST + "/doc/resume.pdf", "_blank");
  };

  const handleShowSideBar = () => {
    setShowSideBar((show) => !show);
  };

  return {
    handleOpenResume,
    showSideBar,
    handleShowSideBar,
  };
};

export default useHeaderViewModel;

const useHomeViewModel = () => {
  const techStackData = [
    "Javascript",
    "Typescript",
    "React (Next.js)",
    "Node.js (Express)",
    "Rust",
    "Docker",
    "MySQL",
    "AWS",
  ];

  const handleOpenMail = () => {
    window && window.open("mailto:muhammadyusufadip.1999@gmail.com", "__blank");
  };

  return { techStackData, handleOpenMail };
};

export default useHomeViewModel;

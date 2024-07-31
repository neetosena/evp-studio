const slugConversion = (title) => {
  return title
    .toLowerCase()
    .split(" ")
    .filter((item) => item !== "")
    .join("-")
    .toString();
};

export { slugConversion };

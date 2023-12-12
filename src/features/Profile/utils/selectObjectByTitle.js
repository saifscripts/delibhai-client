const selectObjectByTitle = (objects, fixedValue) => {
  return objects.map((obj) => ({
    ...obj,
    selected: obj.title === fixedValue,
  }));
};

export default selectObjectByTitle;

export const formatData = (albums, users) => {
  const result = [];
  albums.forEach((dataItem) => {
    const user = users.find((user) => user.id === dataItem.userId);
    if (user) {
      const { name, email } = user;
      const rec = { ...dataItem, name, email };
      result.push(rec);
    }
  });
  return result;
};

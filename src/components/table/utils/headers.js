export const getHeaders = (cb, toggle) => {
  return [
    { id: 1, title: "album id", path: "id" },
    {
      id: 2,
      title: "album title",
      path: "title",
    },
    {
      id: 3,
      title: "user name",
      path: "name",
    },
    {
      id: 4,
      title: "email",
      path: "email",
    },
    {
      id: 5,
      title: "",
      path: "",
      render: (row) => (
        <button onClick={() => cb(row.id)}>
          {toggle === row.id ? "hide photos" : "show photos"}
        </button>
      ),
    },
  ];
};

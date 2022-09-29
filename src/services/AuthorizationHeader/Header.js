export const Header = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    // "Content-Type": "multipart/form-data",
    "Content-Type": "application/json",
  },
};

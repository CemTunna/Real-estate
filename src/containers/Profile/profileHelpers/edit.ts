const editListing = (id: string, navigate: (route: string) => void) => {
  navigate(`/edit/${id}`);
};
export default editListing;

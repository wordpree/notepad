
const Search = (props)=> {

  let {notes,searchTerm} =props;
  const data = notes.filter(
    item=>`${item.heading} ${item.author} ${item.timeAdd}`.toUpperCase().indexOf(searchTerm.toUpperCase())>-1
  );
  return (
    props.children(data)
  );
}

export default Search;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    // console.log(query);
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-28 rounded-full bg-teal-100 px-4
        py-2 text-sm transition-all duration-300 placeholder:text-center 
        placeholder:text-stone-500 focus:tracking-widest
        focus:outline-none focus:ring focus:ring-teal-500
        focus:ring-opacity-75 sm:w-64
        sm:focus:w-72 md:text-base "
        type="text"
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;

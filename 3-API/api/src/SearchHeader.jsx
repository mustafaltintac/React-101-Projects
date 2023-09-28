import { useState } from "react";

function SearchHeader(props) {
  const [InputValue, SetValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.search(InputValue);
  };

  const handleChange = (event) => {
    SetValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label> Ne Arıyorsunuz</label>
        <input value={InputValue} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;

import React from "react";
const PostalCodeAutoCompleteResult = (props) => {
  const { data, onCodeSelect } = props;
  return (
    <>
      {data.length > 0 ? (
        <ul className="suggestions">
          {data.map((item) => (
            <li className="suggestion-active" key={item.code}>
              <a onClick={() => onCodeSelect(item.code)}>
                {item.code}-{item.area}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-suggestions">
          <span role="img" aria-label="tear emoji"></span>{" "}
          <em>sorry no suggestions</em>
        </div>
      )}
    </>
  );
};

export default PostalCodeAutoCompleteResult;

import React, { useState, useCallback, useEffect } from "react";
import { getPostalCodes } from "../services/apiService";
import Result from "./PostalCodeAutoCompleteResult";
import PostalCodeDetails from "./PostalCodeDetails";
const PostalCodeAutoComplete = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCode, setSelectedCode] = useState("");
  const [isFetching, setFetching] = useState(false);
  //fetchig if query changes
  useEffect(() => {
    const fetchData = async () => {
      if (query.length > 0) {
        setFetching(true);
        await getPostalCodes(query).then((response) => {
          if (response.status == 200) {
            setData(response.result);
          } else {
            setData([]);
            setSelectedCode("");
          }
          setFetching(false);
        });
      }
    };
    fetchData();
  }, [query]);
  const onCodeSelect = (code) => {
    setSelectedCode(code);
  };
  return (
    <React.Fragment>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      {!isFetching ? (
        <>
          <Result data={data} onCodeSelect={onCodeSelect} />
          {selectedCode && data.length > 0 && (
            <div> Postal Code:{selectedCode}</div>
          )}
          {selectedCode && data.length > 0 && (
            <PostalCodeDetails selectedCode={selectedCode} />
          )}
        </>
      ) : (
        <div>Loading... please wait</div>
      )}
    </React.Fragment>
  );
};

export default PostalCodeAutoComplete;

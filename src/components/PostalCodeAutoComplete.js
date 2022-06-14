/* This component execute the autocomplete logic fetches data when user types*/
import React, { useState, useEffect } from "react";
import { getPostalCodes } from "../services/apiService";
import Result from "./PostalCodeAutoCompleteResult";
import PostalCodeDetails from "./PostalCodeDetails";
import Loader from "./Loader";
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
  /* This function sets the selected postal  code*/
  const onCodeSelect = (code) => {
    setSelectedCode(code);
  };
  return (
    <React.Fragment>
      <div
        className="card"
        style={{
          width: "18rem",
          width: "40%",
          margin: "auto",
        }}
      >
        <div className="card-header">Autocomplete Demo</div>
        <div
          className="card-body"
          style={{
            margin: "auto",
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          {!isFetching ? (
            <>
              <Result data={data} onCodeSelect={onCodeSelect} />

              {selectedCode && data.length > 0 && (
                <PostalCodeDetails selectedCode={selectedCode} />
              )}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostalCodeAutoComplete;

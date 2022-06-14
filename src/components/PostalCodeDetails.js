/* This function display the result of details api when user clickes on posta code list */
import React, { useState, useCallback, useEffect } from "react";
import { getPostalCodeDetails } from "../services/apiService";
import Loader from "./Loader";
const PostalCodeDetails = React.memo((props) => {
  const [detail, setDetail] = useState({});
  const [isFetching, setFetching] = useState(false);
  const { selectedCode } = props;

  //fetching if selected code changes
  useEffect(() => {
    const fetchData = async () => {
      if (selectedCode.length > 0) {
        setFetching(true);
        await getPostalCodeDetails(selectedCode).then((response) => {
          if (response.status == 200) {
            setDetail(response.result);
          } else {
            setDetail({});
          }
          setFetching(false);
        });
      } else {
        setDetail({});
      }
    };
    fetchData();
  }, [selectedCode]);

  //updateing UI if result changes

  useEffect(() => {}, [detail]);

  return (
    <React.Fragment>
      {!isFetching ? (
        detail && (
          <>
            <div
              className="card"
              style={{
                width: "18rem",
                textAlign: "left",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <div className="card-header">
                Postal Code Details:{selectedCode}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Country: {detail.country}</li>
                <li className="list-group-item">Region: {detail.region}</li>
                <li className="list-group-item">
                  Admin District: {detail.adminDistrict}
                </li>
                <li className="list-group-item">
                  Parliamentary Constituency: {detail.parliamentaryConstituency}
                </li>
                <li className="list-group-item">Area: {detail.area}</li>
              </ul>
            </div>
          </>
        )
      ) : (
        //display loader while loading
        <Loader />
      )}
    </React.Fragment>
  );
});

export default PostalCodeDetails;

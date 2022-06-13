import React, { useState, useCallback, useEffect } from "react";
import { getPostalCodeDetails } from "../services/apiService";
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
          <div className="container">
            <div className="row">
              <span>Postal Code Details</span>
            </div>
            <div className="row">
              <div className="column">Country: {detail.country}</div>
            </div>
            <div className="row">
              <div className="column">Region: {detail.region}</div>
            </div>
            <div className="row">
              <div className="column">
                Admin District: {detail.adminDistrict}
              </div>
            </div>
            <div className="row">
              <div className="column">
                Parliamentary Constituency: {detail.parliamentaryConstituency}
              </div>
            </div>
            <div className="row">
              <div className="column">Area: {detail.area}</div>
            </div>
          </div>
        )
      ) : (
        <div>Loading... please wait</div>
      )}
    </React.Fragment>
  );
});

export default PostalCodeDetails;

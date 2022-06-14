/* This file holds all apis endpoints and returns the result  
    also a comment*/
/* This function returns postal codes for auto complete*/
function getPostalCodes(postalCode) {
  return fetch(
    `https://aqx055dr37.execute-api.us-east-1.amazonaws.com/dev/codes/${postalCode}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}
/* This function returns postal codes details single  postal code*/
function getPostalCodeDetails(postalCode) {
  return fetch(
    `https://aqx055dr37.execute-api.us-east-1.amazonaws.com/dev/codes/details/${postalCode}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}
export { getPostalCodes, getPostalCodeDetails };

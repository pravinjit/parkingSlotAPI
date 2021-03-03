export default function unParkMyCar(parkingList, body, res) {
  /**
   * Validate the Slot Number
   */
  const validateSlotNumber = (sloatNumber) => {
    return parkingList.filter((data) => data.sloatNumber === sloatNumber);
  };
  const sloat = parkingList.filter(
    (data) =>
      data.carNumber === body.carNumber || data.sloatNumber === body.sloatNumber
  );
  let response;
  let updateValue;
  if (sloat[0].carNumber) {
    updateValue = parkingList[
      parkingList.findIndex((data) => data.sloatNumber === sloat[0].sloatNumber)
    ].carNumber = "";
    updateValue = parkingList[
      parkingList.findIndex((data) => data.sloatNumber === sloat[0].sloatNumber)
    ].parkingStatus = 0;

    response = {
      message: `Your car has benn unparked from ${
        validateSlotNumber(body.sloatNumber)[0].sloatNumber
      }`,
    };
  } else {
    response = {
      message: `This Parking Sloat is Free`,
    };
  }
  res.json(response);
}

export default function parkMyCar(parkingList, body, res) {
  let response;

  const validateCarNumber = (carnumber) => {
    return parkingList.filter((data) => data.carNumber === carnumber);
  };
  if (!validateCarNumber(body.carNumber).length) {
    const parkingSlot = parkingList.filter((data) => !data.parkingStatus);

    if (parkingSlot.length) {
      let updateValue;
      updateValue = parkingList[
        parkingList.findIndex(
          (data) => data.sloatNumber === parkingSlot[0].sloatNumber
        )
      ].carNumber = body.carNumber;
      updateValue = parkingList[
        parkingList.findIndex(
          (data) => data.sloatNumber === parkingSlot[0].sloatNumber
        )
      ].parkingStatus = 1;
      response = parkingList.filter(
        (data) => data.carNumber === body.carNumber
      );
    } else {
      response = {
        message: "Parking Full",
      };
    }
  } else {
    response = {
      message: `Your car is aready parked in ${
        validateCarNumber(req.body.carNumber)[0].sloatNumber
      }`,
    };
  }

  res.json(response);
}

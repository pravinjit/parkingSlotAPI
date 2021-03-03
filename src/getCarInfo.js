export default function getCarInfo(parkingList, body, res) {
  console.log("****************8", parkingList, { body });
  const parkingSlot = parkingList.filter(
    (data) =>
      data.carNumber === body.carNumber || data.sloatNumber === body.sloatNumber
  );

  const message = {
    message: "Enter Valid Information",
  };
  parkingSlot.length ? res.json(parkingSlot) : res.json(message);
}

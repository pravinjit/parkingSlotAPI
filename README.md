## Parking Slot API

## Available Scripts

In the project directory, you can run:

### `yarn`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run dev`

Your app is ready to be deployed!

### `http://localhost:8000/getList`

This endpoint will return all parking slot

### `http://localhost:8000/parkMyCar`

Payload : { carNumber":"2341 F" }

The Endpoint will be given the car number as input and the slot where it is parked. If the parking lot is full, the error message is returned

### `http://localhost:8000/unParkMyCar`

Payload : { carNumber":"2341 F" } or { sloatNumber:"P004" }

This endpoint takes the slot number or car number from which the car to be removed from and frees that slot up to be used by other cars

### `http://localhost:8000/getCarInfo`

Payload :  { carNumber":"2341 F" } or { sloatNumber:"P004" }

This endpoint can take either the slot  or car number and return both the car number and slot number the input

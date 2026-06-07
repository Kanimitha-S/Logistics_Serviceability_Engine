const { getPincode } = require("../repositories/serviceabilityRepository");
const { getZone } = require("../utils/zoneMapper");

async function checkServiceability(originPincode, destinationPincode) {

  const origin = await getPincode(originPincode);
  const destination = await getPincode(destinationPincode);

  // Rule 1
  if (!origin || !destination) {
    return {
      success: false,
      status: "INVALID_PINCODE",
      message: "Pincode not found"
    };
  }

  const originZone = getZone(origin.state);
const destinationZone = getZone(destination.state);

// Rule 3
if (destinationZone === "Special") {
  return {
    success: false,
    status: "SPECIAL_DESTINATION",
    message: "Destination falls under Special Service Zone"
  };
}

// Rule 2
if (!destination.is_active) {
  return {
    success: false,
    status: "NOT_SERVICEABLE",
    message: "Destination is currently not serviceable"
  };
}

  let movementType = "";

  // Rule 4
  if (origin.state === destination.state) {
    movementType = "WITHIN_STATE";
  }

  // Rule 5
  else if (originZone === destinationZone) {
    movementType = "WITHIN_ZONE";
  }

  // Rule 6
  else {
    movementType = "REST_OF_INDIA";
  }

  let message = "";

if (movementType === "WITHIN_STATE") {
  message = `Both origin and destination belong to ${origin.state}.`;
}
else if (movementType === "WITHIN_ZONE") {
  message = `Both origin and destination belong to ${originZone} Zone.`;
}
else {
  message = "Origin and destination belong to different zones.";
}

  return {
    success: true,

    origin: {
      pincode: origin.pincode,
      state: origin.state,
      district: origin.district,
      zone: originZone
    },

    destination: {
      pincode: destination.pincode,
      state: destination.state,
      district: destination.district,
      zone: destinationZone
    },

    
    serviceability: {
      status: "SERVICEABLE",
      movement_type: movementType,
      message
    }
  };
}

module.exports = {
  checkServiceability
};
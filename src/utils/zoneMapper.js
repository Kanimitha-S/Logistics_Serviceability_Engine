const zoneMap = {
  South: [
    "TAMIL NADU",
    "KARNATAKA",
    "KERALA",
    "ANDHRA PRADESH",
    "TELANGANA",
    "PUDUCHERRY"
  ],

  North: [
    "DELHI",
    "HARYANA",
    "PUNJAB",
    "HIMACHAL PRADESH",
    "JAMMU & KASHMIR",
    "UTTARAKHAND",
    "LADAKH"
  ],

  West: [
    "MAHARASHTRA",
    "GUJARAT",
    "GOA",
    "RAJASTHAN",
    "DADRA AND NAGAR HAVELI AND DAMAN AND DIU"
  ],

  East: [
    "WEST BENGAL",
    "ODISHA",
    "BIHAR",
    "JHARKHAND",
    "ASSAM",
    "ARUNACHAL PRADESH",
    "MEGHALAYA",
    "MIZORAM",
    "NAGALAND",
    "MANIPUR",
    "TRIPURA",
    "SIKKIM"
  ],

  Central: [
    "MADHYA PRADESH",
    "CHHATTISGARH",
    "UTTAR PRADESH"
  ],

  Special: [
    "ANDAMAN AND NICOBAR ISLANDS",
    "LAKSHADWEEP"
  ]
};

function getZone(state) {
  for (const [zone, states] of Object.entries(zoneMap)) {
    if (states.includes(state.toUpperCase())) {
      return zone;
    }
  }

  return "Unknown";
}

module.exports = { getZone };
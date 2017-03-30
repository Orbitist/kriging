/* http://habs.glos.us/map/ */

// //////@SURFACE
// var longitude = [
//   -83.331, //NOAA GLERL WE2, NOAA GLERL @surface
//   -83.195, //NOAA GLERL WE4, NOAA GLERL @surface
//   -83.359, //NOAA GLERL WE8, NOAA GLERL @surface
//   -83.135, //NOAA GLERL WE13, NOAA GLERL @surface
//   -82.216, //Elyria Pump Station City of Elyria @surface
//   -82.727, //Marblehead Pump Station Village of Marblehead @surface
//   -82.673, //Sandusky Bayside Intake Bowling Green State University @surface
//   -80.807, //Ashtabula, Ohio Aqua America @surface
//   -81.363 //Mentor, Ohio Aqua America @surface
// ];
// var latitude = [
//   41.762, //NOAA GLERL WE2, NOAA GLERL @surface
//   41.827, //NOAA GLERL WE4, NOAA GLERL @surface
//   41.819, //NOAA GLERL WE8, NOAA GLERL @surface
//   41.743, //NOAA GLERL WE13, NOAA GLERL @surface
//   41.455, //Elyria Pump Station City of Elyria @surface
//   41.543, //Marblehead Pump Station Village of Marblehead @surface
//   41.456, //Sandusky Bayside Intake Bowling Green State University @surface
//   41.904, //Ashtabula, Ohio Aqua America @surface
//   41.721 //Mentor, Ohio Aqua America @surface
// ];
// // Blue Green Algae (rfu) 3/30/17
// var response = [
//   0.35, //NOAA GLERL WE2, NOAA GLERL @surface
//   0.35, //NOAA GLERL WE4, NOAA GLERL @surface
//   -0.06, //NOAA GLERL WE8, NOAA GLERL @surface
//   1.279, //NOAA GLERL WE13, NOAA GLERL @surface
//   0.56, //Elyria Pump Station City of Elyria @surface
//   0.52, //Marblehead Pump Station Village of Marblehead @surface
//   2.8, //Sandusky Bayside Intake Bowling Green State University @surface
//   0.47, //Ashtabula, Ohio Aqua America @surface
//   0.48 //Mentor, Ohio Aqua America @surface
// ];

// ////// @DEPTH
// var longitude = [
//   -83.308, //Toledo Low Service Pump Station, City of Toledo @depth
//   -82.823, //OSU GI Ohio State University, Fondriest Environmental, Nexsens @depth
//   -83.29, //Oregon Pump Station City of Oregon @depth
//   -82.939, //Ottawa County Pump Station, Ottawa County Regional Water Treatment Plant @depth
//   -82.012, //Avon Lake Pump Station, Avon Lake Water @depth
//   -83.37, //Little Cedar Point University of Toledo - Lake Erie Center @depth
//   -82.673 //Sandusky Bay Bowling Green State University @depth
// ];
// var latitude = [
//   41.675, //Toledo Low Service Pump Station, City of Toledo @depth
//   41.659, //OSU GI Ohio State University, Fondriest Environmental, Nexsens @depth
//   41.672, //Oregon Pump Station City of Oregon @depth
//   41.514, //Ottawa County Pump Station, Ottawa County Regional Water Treatment Plant @depth
//   41.519, //Avon Lake Pump Station, Avon Lake Water @depth
//   41.725, //Little Cedar Point University of Toledo - Lake Erie Center @depth
//   41.456 //Sandusky Bay Bowling Green State University @depth
// ];
// // Blue Green Algae (rfu) 3/30/17
// var response = [
//   0.3, //Toledo Low Service Pump Station, City of Toledo @depth
//   0.3, //OSU GI Ohio State University, Fondriest Environmental, Nexsens @depth
//   0.5, //Oregon Pump Station City of Oregon @depth
//   0.92, //Ottawa County Pump Station, Ottawa County Regional Water Treatment Plant @depth
//   0.46, //Avon Lake Pump Station, Avon Lake Water @depth
//   0.2, //Little Cedar Point University of Toledo - Lake Erie Center @depth
//   0.1 //Sandusky Bay Bowling Green State University @depth
// ];

////// @DEPTH & @SURFACE
var longitude = [
  -83.308, //Toledo Low Service Pump Station, City of Toledo @depth
  -82.823, //OSU GI Ohio State University, Fondriest Environmental, Nexsens @depth
  -83.29, //Oregon Pump Station City of Oregon @depth
  -82.939, //Ottawa County Pump Station, Ottawa County Regional Water Treatment Plant @depth
  -82.012, //Avon Lake Pump Station, Avon Lake Water @depth
  -83.37, //Little Cedar Point University of Toledo - Lake Erie Center @depth
  -82.673, //Sandusky Bay Bowling Green State University @depth
  -83.331, //NOAA GLERL WE2, NOAA GLERL @surface
  -83.195, //NOAA GLERL WE4, NOAA GLERL @surface
  -83.359, //NOAA GLERL WE8, NOAA GLERL @surface
  -83.135, //NOAA GLERL WE13, NOAA GLERL @surface
  -82.216, //Elyria Pump Station City of Elyria @surface
  -82.727, //Marblehead Pump Station Village of Marblehead @surface
  -82.672, //Sandusky Bayside Intake Bowling Green State University @surface
  -80.807, //Ashtabula, Ohio Aqua America @surface
  -81.363 //Mentor, Ohio Aqua America @surface
];
var latitude = [
  41.675, //Toledo Low Service Pump Station, City of Toledo @depth
  41.659, //OSU GI Ohio State University, Fondriest Environmental, Nexsens @depth
  41.672, //Oregon Pump Station City of Oregon @depth
  41.514, //Ottawa County Pump Station, Ottawa County Regional Water Treatment Plant @depth
  41.519, //Avon Lake Pump Station, Avon Lake Water @depth
  41.725, //Little Cedar Point University of Toledo - Lake Erie Center @depth
  41.456, //Sandusky Bay Bowling Green State University @depth
  41.762, //NOAA GLERL WE2, NOAA GLERL @surface
  41.827, //NOAA GLERL WE4, NOAA GLERL @surface
  41.819, //NOAA GLERL WE8, NOAA GLERL @surface
  41.743, //NOAA GLERL WE13, NOAA GLERL @surface
  41.455, //Elyria Pump Station City of Elyria @surface
  41.543, //Marblehead Pump Station Village of Marblehead @surface
  41.455, //Sandusky Bayside Intake Bowling Green State University @surface
  41.904, //Ashtabula, Ohio Aqua America @surface
  41.721 //Mentor, Ohio Aqua America @surface
];
// Blue Green Algae (rfu) 3/30/17
var response = [
  0.3, //Toledo Low Service Pump Station, City of Toledo @depth
  0.3, //OSU GI Ohio State University, Fondriest Environmental, Nexsens @depth
  0.5, //Oregon Pump Station City of Oregon @depth
  0.92, //Ottawa County Pump Station, Ottawa County Regional Water Treatment Plant @depth
  0.46, //Avon Lake Pump Station, Avon Lake Water @depth
  0.2, //Little Cedar Point University of Toledo - Lake Erie Center @depth
  0.1, //Sandusky Bay Bowling Green State University @depth
  0.35, //NOAA GLERL WE2, NOAA GLERL @surface
  0.35, //NOAA GLERL WE4, NOAA GLERL @surface
  -0.06, //NOAA GLERL WE8, NOAA GLERL @surface
  1.279, //NOAA GLERL WE13, NOAA GLERL @surface
  0.56, //Elyria Pump Station City of Elyria @surface
  0.52, //Marblehead Pump Station Village of Marblehead @surface
  //2.8, //Sandusky Bayside Intake Bowling Green State University @surface
  0.47, //Ashtabula, Ohio Aqua America @surface
  0.48 //Mentor, Ohio Aqua America @surface
];

var longrange = [longitude.min(), longitude.max()];
var latrange = [latitude.min(), latitude.max()];

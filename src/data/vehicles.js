import ambulance from "../assets/icons/ambulance.svg";
import auto from "../assets/icons/auto.svg";
import bike from "../assets/icons/bike.svg";
import car from "../assets/icons/car.svg";
import cargo from "../assets/icons/cargo.svg";
import cng from "../assets/icons/cng.svg";
import fireService from "../assets/icons/fire-service.svg";
import pickup from "../assets/icons/pickup.svg";
import powerTiller from "../assets/icons/power-tiller.svg";
import rickshaw from "../assets/icons/rickshaw.svg";
import tomtom from "../assets/icons/tomtom.svg";
import truck from "../assets/icons/truck.svg";
import van from "../assets/icons/van.svg";

const vehicles = [
  { id: 1, icon: bike, title: "বাইক", to: "bike" },
  { id: 2, icon: auto, title: "অটো রিক্সা", to: "auto-rickshaw" },
  { id: 3, icon: tomtom, title: "টমটম", to: "tomtom" },
  { id: 4, icon: cng, title: "সিএনজি", to: "cng" },
  { id: 5, icon: car, title: "কার", to: "car" },
  { id: 6, icon: truck, title: "ট্রাক", to: "truck" },
  { id: 7, icon: van, title: "ভ্যান গাড়ি", to: "van" },
  { id: 8, icon: pickup, title: "পিকাপ ভ্যান", to: "pickup" },
  { id: 9, icon: cargo, title: "কার্গো ভ্যান", to: "cargo" },
  { id: 10, icon: ambulance, title: "অ্যাম্বুলেন্স", to: "ambulance" },
  { id: 11, icon: fireService, title: "ফায়ার সার্ভিস", to: "fire-service" },
  { id: 12, icon: rickshaw, title: "রিক্সা", to: "rickshaw" },
  { id: 13, icon: powerTiller, title: "পাওয়ার টিলার", to: "power-tiller" },
];

export default vehicles;

import { districts, divisions, unions, upazilas } from "./data/bangla.js";
import { districts_en, divisions_en, unions_en, upazilas_en } from "./data/english.js";

function getAllDivision(type) {
    return type === "en"? divisions_en : divisions;
}
function getAllDistrict(type) {
    return type === "en"? districts_en : districts;
}
function getAllUpazila(type) {
    return type === "en"? upazilas_en : upazilas;
}
function getAllUnion(type) {
    return type === "en"? unions_en : unions;
}

function getDistricts(division_value, type) {
    return type === "en"? districts_en[division_value] : districts[division_value];
}
function getUpazilas(district_value, type) {
    return type === "en"? upazilas_en[district_value] : upazilas[district_value];
}
function getUnions(upazila_value, type) {
    return type === "en"? unions_en[upazila_value] : unions[upazila_value];
}

export {
    getAllDistrict, getAllDivision, getAllUnion, getAllUpazila, getDistricts, getUnions, getUpazilas
};

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

function getDistricts(division_id, type) {
    return type === "en"? districts_en[division_id] : districts[division_id];
}
function getUpazilas(district_id, type) {
    return type === "en"? upazilas_en[district_id] : upazilas[district_id];
}
function getUnions(upazila_id, type) {
    return type === "en"? unions_en[upazila_id] : unions[upazila_id];
}

export {
    getAllDistrict, getAllDivision, getAllUnion, getAllUpazila, getDistricts, getUnions, getUpazilas
};

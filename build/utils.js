"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./services/types");
const parseComment = (commentFromReq) => {
    if (!isString(commentFromReq)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromReq;
};
const isString = (string) => {
    return typeof string == 'string';
};
const parseDate = (dateFromReq) => {
    if (!isString(dateFromReq) || !isDate(dateFromReq)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromReq;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseWeather = (weatherFromReq) => {
    if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
        throw new Error('Incorrect or missing Weather');
    }
    return weatherFromReq;
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const parseVisibility = (visibilityFromReq) => {
    if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
        throw new Error('Invalid or missing Visibility');
    }
    return visibilityFromReq;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;

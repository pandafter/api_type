import { NewDiaryEntry, Visibility, Weather } from "./services/types";

const parseComment = (commentFromReq: any): string => {
    if(!isString(commentFromReq)) {
        throw new Error('Incorrect or missing comment')
    }

    return commentFromReq
}

const isString = (string: string): boolean => {
    return typeof string == 'string'
}

const parseDate = (dateFromReq:any): string => {
    if(!isString(dateFromReq) || !isDate(dateFromReq)){
        throw new Error('Incorrect or missing date')
    }

    return dateFromReq
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const parseWeather = (weatherFromReq: any): Weather => {
    if(!isString(weatherFromReq) || !isWeather(weatherFromReq)){ 
        throw new Error('Incorrect or missing Weather')
    }

    return weatherFromReq
}

const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param)
}


const isVisibility = (param:any): boolean => {
    return Object.values(Visibility).includes(param)
}

const parseVisibility = (visibilityFromReq: any): Visibility => {
    if(!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)){
        throw new Error('Invalid or missing Visibility')
    }

    return visibilityFromReq
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }

    return newEntry
}
export default toNewDiaryEntry
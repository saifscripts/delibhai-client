import validator from 'validator';

export const isMobilePhone = (...locale) => {
    return (str) => {
        return validator.isMobilePhone(str, locale)
    } 
}
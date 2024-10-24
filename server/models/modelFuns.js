 export function dateTypeConvert(dateTimeString) {

    const dateObject = new Date(dateTimeString);
    const localDateString = dateObject.toLocaleString();
    const results = localDateString.split(' ');

    return (results[0]);
}
export function dateFormat(dateTimeString) {

    const dateObject = new Date(dateTimeString);
    const localDateString = dateObject.toLocaleString();
    const results = localDateString.split(' ');
    const temp= results[0].split('/');
    
    return ((temp[0]+"-"+temp[1]+"-"+temp[2]));
}

export function dateTimeFormat(dateTimeString) {

    const dateObject = new Date(dateTimeString);
    const localDateString = dateObject.toLocaleString(undefined, { hour12: false });

    const date = localDateString.split(' ')[0];
    const time = localDateString.split(' ')[1].split(':');
    let hr;
    if (time[0] == '24')
        hr = '00';
    else
        hr = time[0];
    let formatTime = date + ' ' + hr + ':' + time[1] + ':' + time[2];

    return (formatTime);
}
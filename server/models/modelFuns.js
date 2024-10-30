//日期格式化
export function dateFormat(dateTimeString) {

    const dateObject = new Date(dateTimeString);
    const localDateString = dateObject.toLocaleString();
    const results = localDateString.split(' ');
    return (results[0].split('/')[0]+'-'+results[0].split('/')[1]+'-'+results[0].split('/')[2]);
}

//時間格式化
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
    let formatTime = date.split('/')[0]+'-'+date.split('/')[1]+'-'+date.split('/')[2] + ' ' + hr + ':' + time[1] + ':' + time[2];
    return (formatTime);
}

//判斷行程是否過期
export function isExpired(dateTimeString) {

    const dateObject = new Date(dateTimeString);
    const nowTime = new Date();
        
    return (nowTime > dateObject);

}
function disablePage(type, name, value, hours) {
    var currentDate = new Date();

    if (type == 'atTime') {
        //atTime
        //특정시간 기준 쿠키 설정하기
        currentDate.setHours(currentDate.getHours() + hours);
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + currentDate.toUTCString() + ";"
    } else {
        //onTime
        //00:00 시 기준 쿠키 설정
        var currentTime = (Math.floor(currentDate.getTime() / 86400000) * 86400000) + 54000000;
        var expires = new Date(currentTime);
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + expires.toUTCString() + ";";
    }
    location.href = '/main';
}
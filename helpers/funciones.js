function GetInfoLog(req) {
    let Salida
    if ((req.headers['host']=='127.0.0.1:5000') || (req.headers['host']=='localhost:5000')){
        Salida  = {
            "HTTP_X_REAL_IP":'LocalHost',
            "HTTP_USER_AGENT":req.headers["user-agent"],
            "HTTP_X_VERCEL_IP_COUNTRY":'DEV',
            "HTTP_X_VERCEL_IP_CITY":'DEV',
            "HTTP_X_FORWARDED_FOR":'DEV'
        }
    }else{
        Salida  = {
            "HTTP_X_REAL_IP":req.headers["x-real-ip"],
            "HTTP_USER_AGENT":req.headers["user-agent"],
            "HTTP_X_VERCEL_IP_COUNTRY":req.headers["x-vercel-ip-country"],
            "HTTP_X_VERCEL_IP_CITY":req.headers["x-vercel-ip-city"],
            "HTTP_X_FORWARDED_FOR":req.headers["x-vercel-forwarded-for"]
        }
    }
    return Salida
}

var NormalizaFecha = function(_TimeStamp) {
    var dt_object = datetime.fromtimestamp(_TimeStamp);
    return str(dt_object);
}

function getDate () {
    return Math.floor(Date.now() / 1000)
}

module.exports = {
    GetInfoLog,
    NormalizaFecha,
    getDate
}
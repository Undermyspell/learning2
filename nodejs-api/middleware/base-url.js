const baseUrl = (baseurl) =>
    (req, _, next) => {
        const regeEx = new RegExp(`${baseurl}(.*)`);
        req.url = regeEx.test(req.url) ? RegExp.$1 : req.url;
        next();
    }

exports.baseUrl = baseUrl;
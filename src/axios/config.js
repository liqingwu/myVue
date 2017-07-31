import Qs from 'qs'
export default {

    url : '/route',
    baseURL : 'http:....',
    method : 'POST',

    transformRequest : [function (data) {
            //为了避免qs格式化时对内层对象的格式化先把内层的对象转为
            data.CustData = JSON.stringify(data.CustData);
            //由于使用的form-data传数据所以要格式化
            data = Qs.stringify(data);
            return data;
        }
    ],

    transformResponse : [function (data) {

            return data;
        }
    ],

    headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
    },

    // `params` are the URL parameters to be sent with the request Must be a plain
    // object or a URLSearchParams object
    params : {},

    paramsSerializer : function (params) {
        return Qs.stringify(params)
    },
    // `data` is the data to be sent as the request body
    data : {
        // EID: "8484662", Method: "kis.APP003678.ueanalysis.UEStockAnalysis.", NetID:
        // "8484662159954", CustData: {     "Result": "",     "ErrMsg": "",
        // "AccountDB": "",     "TotalPage": "",     "CurrentPage": "1",
        // "ItemsOfPage": "100",     "Data": {} }
    },

    timeout : 1000,

    withCredentials : false, // default

    responseType : 'json', // default

    onUploadProgress : function (progressEvent) {
        // Do whatever you want with the native progress event
    },

    onDownloadProgress : function (progressEvent) {
        // Do whatever you want with the native progress event
    },

    maxContentLength : 2000,

    validateStatus : function (status) {
        return status >= 200 && status < 300; // default
    },

    maxRedirects : 5, // default
}
import Axios from 'axios';

export default function callApi(endpoint, method = 'GET', body) {
    return Axios({
        method: method,
        url: `http://5b35b3b66005b00014c5dc50.mockapi.io/api/v1/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}
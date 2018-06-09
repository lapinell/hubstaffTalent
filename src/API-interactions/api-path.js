import axios from 'axios';

const APIpath = "https://jobs.github.com/positions.json";

const apiGET = (query) => { //query is an endpoint in string format
    return axios.get(APIpath + '?' + query)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
};

export default APIpath;
export { apiGET }
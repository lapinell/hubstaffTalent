import axios from 'axios';

const APIpath = "https://jobs.github.com/positions.json";

const apiGETall = () => {
    let jobs = axios.get(APIpath)
        .then((response) => {
            console.log('get all response', response);
            return response;
        })
        .catch((error) => {
            console.log('there was an error getting the jobs:', error);
        });

        // console.log('get all jobs', jobs);
        return jobs
};

const apiGET = (query) => { //query is an endpoint in string format
    return axios.get(APIpath + '?' + query)
        .then((response) => {
            console.log('get query response', response);
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
};

export default APIpath;
export { apiGETall, apiGET }
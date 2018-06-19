import axios from 'axios';

const port = 3004;
const jsonPath = 'localhost:' + port;

let postFave = (jobObj) => {
    return axios.post(jsonPath + '/savedJobs', jobObj)
    .then ((response) => {
        console.log('job posted', response);
    })
    .catch ((error) => {
        console.log('there was an error posting the job');
    })
};

let deleteFave = () => {

};

export { postFave };
import axios from 'axios';

const port = 3004;
const jsonPath = "http://localhost:" + port + "/savedJobs";

let getFaves = () => {
    return axios.get(jsonPath)
    .then ((data) => {
        console.log('the faved jobs are:', data.data);
    })
    .catch ((error) => {
        console.log('there was an error fetching the saved jobs:', error);
    })
}

let postFave = (key) => {
    console.log('the key is a', key);
    console.log('faveJob is a', {key} );
    return axios.post(jsonPath, {key})
    .then ((response) => {
        console.log('job posted', response.data);
        return response.data.id
    })
    .catch ((error) => {
        console.log('there was an error posting the job', error, error.message);
    })
};

let deleteFave = (id) => {
    console.log('delete fave function was triggered');
    return axios.delete(jsonPath + "/" + id)
    .then((response) => {
        console.log('job id' + id + 'was deleted: ' + response );
    })
};

export { getFaves, postFave, deleteFave };
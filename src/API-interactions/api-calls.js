import { apiGET } from './api-path';


const Search = (term) => { // term is a string
    let searchTerm = "search=" + term;
    return apiGET(searchTerm);
}

const searchLocation = (term) => { // term is a string containing a city name, zip code or other location search term
    let location = "location=" + term;
    return apiGET(location); 
}

const searchLatLong = (lat, long) => { // lat is the latitudinal coordinates numbers, long is the longitudinal coordinates numbers
    let latitude = "lat=" + lat;
    let longitude = "long=" +long;
    return apiGET(latitude + "&" + longitude);
}

const searchFT = () => { // no parameter need here because this function will set the resulting parameter to true automatically
    let fullTime = "full_time=true";
    return apiGET(fullTime);
}

const GETposition = (idNmr, boolean) => { // idNmr is the position number, optional boolean for markdown
    let getCall = "/"+ idNmr;
    if (boolean) {
        getCall += "?markdown=" + boolean;
        return apiGET(getCall);
    } else {
        return apiGET(getCall);
    }
}

export { Search, searchLatLong, searchLocation, searchFT, GETposition }
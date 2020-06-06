//This KEY will be inside users'browser
// Contra: users can get our API keys easily
// If we need: we can use restrictions 'restricted key'
// npm install axios@0.18.1
import axios from 'axios';

const KEY = 'AIzaSyADCaGFTDsJAkWVP62mV7wPTO5G0JScOU0';

//make a pre-configure instance of axios that already
// has a base URL and some default parameters loaded into it
// so, we can call it: youtube.get('/search')

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
})
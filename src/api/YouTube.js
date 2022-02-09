import axios from 'axios';
const KEY='AIzaSyB2T4oJ2W2xJoaROfPS497N_npRzQGzkns';

export default axios.create({
        baseURL:'https://www.googleapis.com/youtube/v3',
        params:{
            part:'snippet',
            maxResult: 10,
            key:KEY
        }
})
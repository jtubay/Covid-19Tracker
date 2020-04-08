import axios from 'axios';

const url = `https://covid19.mathdro.id/api`;

const fetchDat = async() => {
    try{
        const response = await axios.get(url)

        console.log(response)
    }catch(err){
        console.log(err)
    }
}
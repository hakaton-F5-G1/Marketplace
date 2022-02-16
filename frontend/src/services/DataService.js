import Global from "../Global/Global";
import axios from 'axios';

class DataService {
    static url;
    static {
        this.url = Global.appUrl;
    }

    static async getData()
    {
        let data;
        await axios.get(`${this.url}`,{responseType: 'json'})
            .then(res => 
                {
                    data = res.data;
                    return data;
                }
            )
            return data;
    }
}

export default DataService;
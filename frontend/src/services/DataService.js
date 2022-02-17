import Global from "../Global/Global";
import axios from 'axios';

class DataService {
    static url;
    static {
        this.url = Global.getProducts;
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

    static async getItemById(id)
    {
        let data;
        await axios.get(`${Global.getProducts}/${id}`,{responseType: 'json'})
            .then(res => 
                {
                    data = res.data;
                    return data;
                }
            )
            return data;
    }

    static async addNew(item)
    {
        let msg;
        await axios.post(`${this.url}`,item)
            .then(res => 
                {
                    msg = "New Item Added";
                    return msg;
                }
            )
            return msg;
    }

}

export default DataService;
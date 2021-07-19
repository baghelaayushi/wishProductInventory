import WishApiClient from "./WishApiClient.js";
export default class ProductInventoryService {
    constructor() {
        this.api = new WishApiClient('access token');
    }

    /**
     * This is an async function that makes the api call to get wishData
     * The library used is axios
     * All the parameters are optional and would use default values
     * It returns the data value if fetched correctly
     */
    getProductInventory = async() => {
        const params = {
            start: 20,
            limit: 2,
            since: 2014-10-15,
            upTo: "2015-06-10T01:00:00"
        }
        try {
            await this.api.doGet('/api/v2/product/multi-get', {...params})
            .then(response => {
                return response.data;
            })
        } catch {
            console.log('ERROR HAPPENED WHILE FETCHING DATA');
            return null;
        }
    }

    /**
     * This function formats the data as we want to store
     * @returns 
     */
    formatDataModal = () => {
        const dataFromWish = this.getProductInventory();
        const formattedData = {};
        if(dataFromWish) {
            dataFromWish.forEach(dataRow => {
                const parentProductName = dataRow.Product?.name;
                const variantObject = dataRow.Product?.variant.map(variantItem => {
                    return (
                        {
                            sku: variantItem.Variant.sku,
                            pid: variantItem.Variant.id,
                            name: parentProductName + variantItem.Variant.color
                        }
                        );
                    });
                    formattedData = {...formattedData, ...variantObject};   
            });
        }

        return formattedData;
    }

}
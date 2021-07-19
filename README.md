# wishProductInventory
This repository is a mock project to query wish api and get related products

URL used:

https://merchant.wish.com/documentation/api/v2#list-all-product

Sample call: 
"https://merchant.wish.com/api/v2/product/multi-get?limit=2&start=20&since=2014-10-15&access_token=an_example_access_token"

The sample response looks like

```
{
   "code":0,
   "data":[
      {
         "Product":{
            "description":"Example description",
            "id":"5284e18fb5baba49d5xxxxxx",
            "name":"Cute Ring",
            "category":"Fashion",
            "number_saves":"6",
            "number_sold":"0",
            "parent_sku":"Cute Bow Ring",
            "review_status":"approved",
            "removed_by_merchant":false,
            "default_shipping_price":"10.5",
            "tags":[
               {
                  "Tag":{
                     "id":"womensring",
                     "name":"womens ring"
                  }
               },
               {
                  "Tag":{
                     "id":"jewelry",
                     "name":"Jewelry"
                  }
               },
               {
                  "Tag":{
                     "id":"bow",
                     "name":"Bow"
                  }
               }
            ],
            "variants":[
               {
                  "Variant":{
                     "color":"green",
                     "condition":"NEW",
                     "enabled":"True",
                     "id":"5284e192b111ba49d5xxxxxx",
                     "product_id":"5284e18fb5baba49d5xxxxxx",
                     "inventory":"11",
                     "msrp":"113.9",
                     "price":"110.9",
                     "shipping":"10.5",
                     "localized_price":"660.0",
                     "localized_shipping":"63.0",
                     "localized_currency_code":"CNY",
                     "sku":"AA1"
                  }
               },
               {
                  "Variant":{
                     "color":"blue",
                     "condition":"USED",
                     "enabled":"True",
                     "id":"5284e19qqqbaba49d5bbbbbb",
                     "product_id":"5284e18fb5baba49d5xxxxxx",
                     "inventory":"100",
                     "msrp":"19.9",
                     "price":"15.9",
                     "shipping":"10.5",
                     "localized_price":"90.0",
                     "localized_shipping":"63.0",
                     "localized_currency_code":"CNY",
                     "sku":"ZZ1"
                  }
               }
            ]
         }
      },
      {
         "Product":{
            "description":"Example Description",
            "id":"5284efafb5bab119d1zzzzzz",
            "name":"Fairisle Scarf",
            "number_saves":"0",
            "number_sold":"0",
            "parent_sku":"Fairisle Scarf",
            "review_status":"rejected",
            "removed_by_merchant":false,
            "default_shipping_price":"10.0",
            "tags":[
               {
                  "Tag":{
                     "id":"cottonscarf",
                     "name":"cotton scarf"
                  }
               },
               {
                  "Tag":{
                     "id":"fashionaccessorie",
                     "name":"Fashion Accessories"
                  }
               },
               {
                  "Tag":{
                     "id":"fashion",
                     "name":"Fashion"
                  }
               },
               {
                  "Tag":{
                     "id":"scarf",
                     "name":"scarf"
                  }
               }
            ],
            "variants":[
               {
                  "Variant":{
                     "color":"gray",
                     "enabled":"True",
                     "id":"5284efb1b111ba49d1qqqqqq",
                     "product_id":"5284efafb5bab119d1zzzzzz",
                     "inventory":"1010",
                     "msrp":"25.9",
                     "price":"21.91",
                     "shipping":"10.0",
                     "localized_price":"120.0",
                     "localized_shipping":"60.0",
                     "localized_currency_code":"CNY",
                     "sku":"AA4"
                  }
               },
               {
                  "Variant":{
                     "color":"red",
                     "enabled":"True",
                     "id":"5284efbaaababa49d1eiwqdf",
                     "product_id":"5284efafb5bab119d1zzzzzz",
                     "inventory":"1100",
                     "msrp":"21.99",
                     "price":"21.91",
                     "shipping":"11.0",
                     "localized_price":"120.0",
                     "localized_shipping":"66.0",
                     "localized_currency_code":"CNY",
                     "sku":"AAB"
                  }
               }
            ]
         }
      }
   ],
   "country_shippings":[
      {
         "CountryShipping":{
            "price":"4.99",
            "localized_price":"30.0",
            "localized_currency_code":"CNY",
            "country_code":"CA"
         }
      },
      {
         "CountryShipping":{
            "price":"3.99",
            "localized_price":"24.0",
            "localized_currency_code":"CNY",
            "country_code":"US"
         }
      }
   ]
}
```

There are a following assumptions made that needed further clarity: 
1. The name for the product: Since we want to store the variant as every product is going to have atleast one variant, that is one product. The way products are named is using the product name and appending it with variant color.
2.If we have more that 250 products, additional processing is needed to support pagination.


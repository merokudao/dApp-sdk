## Embedded Checkout Integration:

Our APIs provide an easy way for web developers to integrate payment functionality into their applications. In this documentation, we will guide you through the process of creating, updating, and getting product codes for payment integration.

#### 1. Creating an API Key:

Before using our APIs, you will need to create an API key. This key will allow you to access our APIs and use them in your application.

To create an API key, you can follow these steps:

- Log in to your account on our xion pay dapp.
- Navigate to the API section.
- Click on the "Create API Key" button.
- Enter a name for your API key and click "Create".

Your API key will now be generated and displayed on the screen.

#### 2. Creating a Product:

To integrate payments for your products, you will need to create a product first. You can do this by using the CreateProduct API

The Create Product API accepts an array of product objects. Each product object must have a unique reference id, name, and price in USD. The API will generate a product_code for each product and return the updated product object with the product_code added to it.

Endpoint: POST /iframe/create-product
Request Body:
```
[
    {
      "reference_id": "product_001",
      "name": "Product 1",
      "price": 9.99
    },
    {
      "reference_id": "product_002",
      "name": "Product 2",
      "price": 19.99
    }
]
```
Response:
```
[
    {
      "reference_id": "product_001",
      "name": "Product 1",
      "price": 9.99,
      "product_code": "PRD-001"
    },
    {
      "reference_id": "product_002",
      "name": "Product 2",
      "price": 19.99,
      "product_code": "PRD-002"
    }
 ]
```
Here's an example code snippet showing how to create a product using our API:

```javascript
const axios = require('axios');

const url = 'https://devp-api.xion.app/api/v2/iframe/create-product';
const headers = {'Authorization': 'Bearer YOUR_API_KEY'};
const data = [
    {
      "reference_id": "product_001",
      "name": "Product 1",
      "price": 9.99
    },
    {
      "reference_id": "product_002",
      "name": "Product 2",
      "price": 19.99
    }
  ];

axios.post(url, data, {
  headers: headers
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```
#### 3. Getting a Product Code:

After creating a product, you will need to get its product code in order to integrate payment functionality.
There are three ways to get the product_code for a product:

- a) If you have already created the products and stored their product codes in your database, you can use those directly.

- b) If you have created products but not stored the product_codes, you can use the Get Product Code API by passing the reference_id of the product. The API will return the product_code for that product.

Endpoint: GET /iframe/product/{referenceId}
Response:
```
{
      "reference_id": "product_001",
      "name": "Product 1",
      "price": 9.99,
      "product_code": "PRD-001"
}
```

Here's an example code snippet showing how to get a product code using our API:

```javascript
const axios = require('axios');

const url = 'https://devp-api.xion.app/api/v2/iframe/product/product_001';
const headers = {'Authorization': 'Bearer YOUR_API_KEY'};

axios.get(url, {
  headers: headers,
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```
- c) If you want to create a single product and get its product_code in one API call, you can use the same Get Product Code API by passing the reference_id, name, and price of the product(whole product object). The API will create the product and return the product object with the product_code added to it.

Endpoint: GET /iframe/product/{referenceId}
Request Params:
```
  "reference_id": "product_003",
  "name": "Product 3",
  "price": 29.99
```
Response:
```
{
  "reference_id": "product_003",
  "name": "Product 3",
  "price": 29.99,
  "product_code": "PRD-003"
}
```
Here's an example code snippet showing how to create a product code using our API:
```javascript
const axios = require('axios');

const url = 'https://prodp-api.xion.app/api/v2/iframe/product/referenceId';
const headers = {'Authorization': 'Bearer YOUR_API_KEY'};
const params = {'name': 'Product Name', 'price': '10.99'};

axios.get(url, {
  headers: headers,
  params: params
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

#### 4. Getting All Products:

The Get All Products API returns a list of all the product objects along with their product codes.

Endpoint: GET /iframe/products
Response:
```
[
    {
      "reference_id": "product_001",
      "name": "Product 1",
      "price": 9.99,
      "product_code": "PRD-001"
    },
    {
      "reference_id": "product_002",
      "name": "Product 2",
      "price": 19.99,
      "product_code": "PRD-002"
    },
    {
      "reference_id": "product_003",
      "name": "Product 3",
      "price": 29.99,
      "product_code": "PRD-003"
    }
 ]
```

Here's an example code snippet showing how to get all products using our API:

```javascript
const axios = require('axios');

const url = 'https://devp-api.xion.app/api/v2/iframe/products';
const headers = {'Authorization': 'Bearer YOUR_API_KEY'};

axios.get(url, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

```

#### 5. Updating a Product:

The Update Product API can be used to update the details of a product. You can update the name and price of the product by passing the reference_id of the product and the updated details in the request body.

Endpoint: PATCH /iframe/update-product
Request Body:
```
[
    {
        "reference_id": "product_001",
         "name": "New Product Name",
         "price": 14.99(new price)
    }
]
```
Response:
```
{
  "reference_id": "product_001",
  "name": "New Product Name",
  "price": 14.99,
  "product_code": "PRD-001"
}
```
Note: If you only want to update the name or price of the product, you can pass only that field in the request body.

Here's an example code snippet showing how to update a product using our API:

```javascript
const axios = require('axios');

const url = 'https://devp-api.xion.app/update-product';
const headers = {'Authorization': 'Bearer YOUR_API_KEY'};
const data = [
  {
    "reference_id": "product_001",
    "name": "New Product Name",
    "price": 14.99 //updated price
  }
];

axios.patch(url, data, {
  headers: headers
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```
#### 6. Error Handling:
Our APIs return appropriate HTTP status codes along with error messages in case of errors. Here are some of the common error scenarios:

- Invalid API Key: HTTP 401 Unauthorized
- Invalid Request Body: HTTP 400 Bad Request
- Product not found: HTTP 404 Not Found
- Internal Server Error: HTTP 500 Internal Server Error

## Using Product Code to Open Payment Link

#### Method 1: Use the product code to initiate the checkout process with an IFRAME

Once you have the product code, you can use it to initiate the checkout process using our IFRAME. Simply set the src attribute of an IFRAME element to the URL of our checkout page, with the product code appended as a query parameter.

Here's an example of how to add the product code to the IFRAME URL using JavaScript:
```html
<iframe id="myIframe" src="" height="1100px" width="500px" frameborder="0" scrolling="no"></iframe>

<script>
    function getIframeSrcUrl(){
    const code = "PRODUCT_CODE";
    document.getElementById("myIframe").src="https://checkout.xionpay.app/?token="+code;
    //or you can use
    document.getElementById('myIframe').src = `https://checkout.xionpay.app/?token=${code}`;
    }
</script>

```

In the above script, replace PRODUCT_CODE with the product_code that you got from the Get Product Code API.

Finally, call the getIframeSrcUrl() function to set the source URL of the IFRAME:
```html
<button onclick="getIframeSrcUrl()">Pay with Xion</button>
```
In the above code, replace "Pay with Xion" with the text that you want to display on the button that opens the Xion checkout page.


#### Method 2: Use a popup instead of an IFRAME
If you don't want to use an IFRAME, you can use a popup window instead. To do this, simply use window.open() to open the checkout URL with the product code appended as a query parameter.

Here's an example of how to open the checkout page in a popup window:
```javascript
const productCode = '7a030408-e642-4cac-9106-5de36bf48ec9';
window.open(`https://checkout.xionpay.app/?token=${productCode}`, '_blank', 'width=500,height=1100');
```
In the above code, replace the product_code with what you got from the Get Product Code API.


## Conclusion:

In this documentation, we have provided you with the necessary information to connect to our APIs and integrate payment functionality into your web application. By following the steps outlined above, you will be able to create and update products and get their corresponding product code.
If you face any issues or have any questions, please contact our support team for assistance.

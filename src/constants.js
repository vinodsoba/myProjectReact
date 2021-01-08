export const GRAPHQL_API = "http://dev.magento.com/graphql";

export const TITLE = "Video List";

export const GET_PRODUCTS_QUERY = 
`
query myCartQuery{
    cart(cart_id: "1WxKm8WUm3uFKXLlHXezew5WREfVRPAn") {
      items {
        id
        quantity
      }
      billing_address {
        firstname
        lastname
        postcode
        }
      shipping_addresses {
        firstname
        lastname
        postcode
      }
    }
  }
  
  
`;

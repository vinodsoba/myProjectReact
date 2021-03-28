const axios = require('axios');
const {
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLList,
    GraphQLSchema,
    GraphQLBoolean
} = require('graphql');


// Product Type
const ProductType = new GraphQLObjectType({
    name: 'product',
    fields: () => ({
        search: { type: GraphQLString },
        items: { type: ItemType }

    })
});

const ItemType = new GraphQLObjectType({
    name: 'items',
    fields: () => ({   
        id: { type: GraphQLInt }, 
        name: { type: GraphQLString },
        sku: { type: GraphQLString },
        special_price: { type: GraphQLInt }

    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        product: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return axios.get('http://dev.magento.com/graphql/')
                .then(res => res.data);
            }
        },

        products: {
            type: ProductType,
            args: {
                search: { type: GraphQLString },
                sku: { type: GraphQLString }
            },
            resolve(parent, args){
                return axios.get('http://dev.magento.com/graphql/${args.sku}')
                .then(res => res.data);
            }
        }
    

    }

});

module.exports = new GraphQLSchema({
    query: RootQuery
});
// import { gql } from "@apollo/client";

// /**
//  * Get First product 36 and collection from collection handle
//  *
//  * @param {string} handle handle of collection.
//  * @return {object} collectionByHandle.
//  */
// export const getProductsFromCollectionHandleInit = gql`
//   query getProductsFromCollectionHandle($handle: String!, $currencyCode: CurrencyCode! ) {
//     collectionByHandle(handle: $handle) {
//       id
//       title
//       description
//       handle
//       products(first: 8) {
//         edges {
//           node {
//             productType
//             id
//             title
//             availableForSale
//             images(first: 3) {
//               edges {
//                 node {
//                   id
//                   altText
//                   originalSrc
//                 }
//               }
//             }
//             options(first: 3) {
//               name
//               values
//             }
//             tags
//             handle
            
//             variants(first: 1) {
//               edges {
//                 node {
//                   selectedOptions{
//                     name 
//                     value 
//                   }
//                   quantityAvailable
//                   presentmentPrices(first:1, presentmentCurrencies:[$currencyCode]){
//                     edges{
//                       node{
//                         compareAtPrice{
//                           amount
//                           currencyCode
//                         }
//                         price{
//                           amount
//                           currencyCode
//                         }
//                       }
//                     }
//                   }
//                   id
//                   title
//                 }
//               }
//             }
//           }
//           cursor
//         }
//         pageInfo {
//           hasNextPage
//           hasPreviousPage
//         }
//       }
//     }
//   }
// `;

// /**
//  * Get specified products and collection from collection handle
//  *
//  * @param {string} handle handle of collection.
//  * @param {string} after specified cursor.
//  * @param {string} first the first number of products to recieve.
//  * @return {object} collectionByHandle.
//  */

// export const getProductsFromCollectionHandleAfter = gql`
//   query getProductsFromCollectionHandle(
//     $handle: String!
//     $after: String!
//     $first: Int!
//     $currencyCode: CurrencyCode!
//   ) {
//     collectionByHandle(handle: $handle) {
//       id
//       title
//       handle
//       products(first: $first, after: $after) {
//         edges {
//           node {
//             productType
//             availableForSale
//             id
//             title
//             # collections(first:100) {
//             #   edges {
//             #     node {
//             #       handle
//             #       id
//             #       title
//             #     }
//             #   }
//             # }
//             images(first: 3) {
//               edges {
//                 node {
//                   id
//                   altText
//                   originalSrc
//                   transformedSrc
//                 }
//               }
//             }
//             options(first: 10) {
//               name
//               values
//             }
//             tags
//             handle
//             # priceRange {
//             #   maxVariantPrice {
//             #     amount
//             #     currencyCode
//             #   }
//             #   minVariantPrice {
//             #     amount
//             #     currencyCode
//             #   }
//             # }
//             variants(first: 1) {
//               edges {
//                 node {
//                   quantityAvailable
//                   selectedOptions{
//                     name 
//                     value 
//                   } 
//                   presentmentPrices(first:1, presentmentCurrencies:[$currencyCode]){
//                     edges{
//                       node{ 
//                         compareAtPrice{
//                           amount
//                           currencyCode
//                         }
//                         price{
//                           amount
//                           currencyCode
//                         }
//                       }
//                     }
//                   }
                  
//                 }
//               }
//             }
//           }
//           cursor
//         }
//         pageInfo {
//           hasNextPage
//           hasPreviousPage
//         }
//       }
//     }
//   }
// `;

// /**
//  * Get page from page handle
//  *
//  * @param {string} handle handle of collection.
//  * @return {object} pageByHandle.
//  */
// export const getPageFromHandle = gql`
//   query getPageFromHandle($handle: String!) {
//     pageByHandle(handle: $handle) {
//       body
//       bodySummary
//       createdAt
//       title
//     }
//   }
// `;

// /**
//  * Get product from product handle
//  *
//  * @param {string} handle handle of collection.
//  * @return {object} productByHandle.
//  */
// export const getProductByHandle = gql`
//   query getProductByHandle($handle: String!, $currencyCode: CurrencyCode!) {
//     productByHandle(handle: $handle) {
//       productType
//       availableForSale
//       createdAt
//       description
//       descriptionHtml
//       id
//       handle
//       tags
//       title
//       vendor
//       metafields(first:100) {
//         edges {
//           node {
//             id
//             value
//             description
//           }
//         }
//       }
//       options(first: 100) {
//         id
//         name
//         values
//       }
//       images(first: 20) {
//         edges {
//           node {
//             altText
//             originalSrc
//           }
//         }
//       }
//       description
//       descriptionHtml
//       priceRange {
//         minVariantPrice {
//           amount
//           currencyCode
//         }
//         maxVariantPrice {
//           amount
//           currencyCode
//         }
//       }
//       collections(first:100){
//         edges {
//           node {
//             title
//             handle
//             id
//           }
//         }
//       }
//       variants(first:100){
//         edges {
//           node {
//             quantityAvailable 
//             presentmentPrices(first:1, presentmentCurrencies:[$currencyCode]){
//               edges{
//                 node{
//                   compareAtPrice{
//                     amount
//                     currencyCode
//                   }
//                   price{
//                     amount
//                     currencyCode
//                   }
//                 }
//               }
//             } 
//             id
//             availableForSale
//             selectedOptions {
//               name
//               value
//             }
//             sku
//             title
//           }
//         }
//       }
//     }
//   }
// `;




// export const getProductRecommendations = gql`
//   query getProductRecommendations($productId: ID!, $currencyCode: CurrencyCode!) {
//     productRecommendations  (productId: $productId) {
//       productType
//       id
//       handle
//       tags
//       title
//       vendor
//       options(first:100) {
//         id
//         name
//         values
//       }
//       variants(first:100){
//         edges {
//           node {
//             presentmentPrices(first:1, presentmentCurrencies:[$currencyCode]){
//               edges{
//                 node{
//                   compareAtPrice{
//                     amount
//                     currencyCode
//                   }
//                   price{
//                     amount
//                     currencyCode
//                   }
//                 }
//               }
//             }
//             id
//             selectedOptions {
//               name
//               value
//             }
//             sku
//             title
            
//           }
//         }
//       }
//       priceRange {
//         minVariantPrice {
//           amount 
//           currencyCode 
//         }
//         maxVariantPrice {
//           amount 
//           currencyCode  
//         }
//       }
//       images(first:20){
//         edges{
//           node {
//             altText
//             originalSrc 
//           }
//         }
//       }


//     }
//   }
// `;



// export const getProductsFromSearch = gql`
//   query getProductsFromSearch($searchString: String!, $first: Int!,$currencyCode: CurrencyCode!) {
//       products(query: $searchString, first:$first) {
//         edges {
//           node {
//             productType
//             availableForSale
//             id
//             title
//             # collections(first:100) {
//             #   edges {
//             #     node {
//             #       handle
//             #       id
//             #       title
//             #     }
//             #   }
//             # }
//             images(first: 3) {
//               edges {
//                 node {
//                   id
//                   altText
//                   originalSrc
//                   transformedSrc
//                 }
//               }
//             }
//             options(first: 10) {
//               name
//               values
//             }
//             tags
//             handle
//             # priceRange {
//             #   maxVariantPrice {
//             #     amount
//             #     currencyCode
//             #   }
//             #   minVariantPrice {
//             #     amount
//             #     currencyCode
//             #   }
//             # }
//             variants(first: 1) {
//               edges {
//                 node {
//                   quantityAvailable
//                   selectedOptions{
//                     name 
//                     value 
//                   } 
//                   presentmentPrices(first:1, presentmentCurrencies:[$currencyCode]){
//                     edges{
//                       node{ 
//                         compareAtPrice{
//                           amount
//                           currencyCode
//                         }
//                         price{
//                           amount
//                           currencyCode
//                         }
//                       }
//                     }
//                   }
                  
//                 }
//               }
//             }
//           }
//           cursor
//         }
//         pageInfo {
//           hasNextPage
//           hasPreviousPage
//         }
//       }
    
//   }
// `;

// export const getProductsFromSearchAfter = gql`
//   query getProductsFromSearchAfter($searchString: String!, $first: Int!, $after: String!,$currencyCode: CurrencyCode!) {
//     products(query: $searchString, first:$first, after: $after) {
//       edges {
//           node {
//             productType
//             availableForSale
//             id
//             title
//             # collections(first:100) {
//             #   edges {
//             #     node {
//             #       handle
//             #       id
//             #       title
//             #     }
//             #   }
//             # }
//             images(first: 3) {
//               edges {
//                 node {
//                   id
//                   altText
//                   originalSrc
//                   transformedSrc
//                 }
//               }
//             }
//             options(first: 10) {
//               name
//               values
//             }
//             tags
//             handle
//             # priceRange {
//             #   maxVariantPrice {
//             #     amount
//             #     currencyCode
//             #   }
//             #   minVariantPrice {
//             #     amount
//             #     currencyCode
//             #   }
//             # }
//             variants(first: 1) {
//               edges {
//                 node {
//                   quantityAvailable
//                   selectedOptions{
//                     name 
//                     value 
//                   } 
//                   presentmentPrices(first:1, presentmentCurrencies:[$currencyCode]){
//                     edges{
//                       node{ 
//                         compareAtPrice{
//                           amount
//                           currencyCode
//                         }
//                         price{
//                           amount
//                           currencyCode
//                         }
//                       }
//                     }
//                   }
                  
//                 }
//               }
//             }
//           }
//           cursor
//         }
//         pageInfo {
//           hasNextPage
//           hasPreviousPage
//         }
//     }

//   }
// `;

// export const getAvailableCurrency = gql`
//   query getAvailableCurrency {
//       shop {
//       paymentSettings {
//         countryCode
//         currencyCode
//         enabledPresentmentCurrencies
//       }
//     }
//   }
// `;

// export const getCustomer = gql`
//   query getCustomer($customerAccessToken: String!) {
//     customer(customerAccessToken: $customerAccessToken) {
//       id
//       displayName 
//       email
//       acceptsMarketing 
//       phone 
//       defaultAddress {
//         id
//         address1
//         address2 
//         firstName
//         lastName
//         company
//         city
//         zip
//         country
//         province
//       }
//       addresses(first:250) {
//         edges{
//           node {
//             id
//             address1
//             address2 
//             firstName
//             lastName
//             company
//             city
//             zip
//             country
//             province
//           }
//         }
//       }
//       orders (first:250){
//         edges {
//           node {
//             id
//             orderNumber
//             processedAt
//             shippingAddress{
//               id
//               address1
//               address2 
//               firstName
//               lastName
//               company
//               city
//               zip 
//             }
//             successfulFulfillments(first:100) {
//               trackingCompany 
//               fulfillmentLineItems(first : 100){
//                 edges{
//                   node {
//                     quantity 
//                     lineItem {
//                       title 
//                       variant {
//                         image{
//                           altText
//                           id
//                           originalSrc 
//                         }
//                         title
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//             totalPriceV2 {
//               amount 
//               currencyCode
//             }
//             totalRefundedV2 {
//               amount 
//               currencyCode
//             }
//             totalShippingPriceV2 {
//               amount 
//               currencyCode
//             }
//             totalTaxV2 {
//               amount 
//               currencyCode
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export const getProducts = gql`
//   query getProducts($productIds: [ID!]!, $currencyCode: CurrencyCode!) {
//     nodes(ids: $productIds) {
//       ... on Product {
//         availableForSale
//         createdAt
//         description
//         descriptionHtml
//         id
//         handle
//         productType
//         tags
//         title
//         vendor
//         options(first: 100) {
//           id
//           name
//           values
//         }
//         images(first: 20) {
//           edges {
//             node {
//               altText
//               originalSrc
//             }
//           }
//         }
//         description
//         descriptionHtml
//         priceRange {
//           minVariantPrice {
//             amount
//             currencyCode
//           }
//           maxVariantPrice {
//             amount
//             currencyCode
//           }
//         }
//         collections(first:100){
//           edges {
//             node {
//               title
//               handle
//               id
//             }
//           }
//         }
//         variants(first:100){
//           edges {
//             node {
//               quantityAvailable 
//               presentmentPrices(first:1, presentmentCurrencies:[$currencyCode]){
//                 edges{
//                   node{
//                     compareAtPrice{
//                       amount
//                       currencyCode
//                     }
//                     price{
//                       amount
//                       currencyCode
//                     }
//                   }
//                 }
//               }
//               image {
//                 originalSrc
//                 altText
//               } 
//               id
//               availableForSale
//               selectedOptions {
//                 name
//                 value
//               }
//               sku
//               title
//             }
//           }
//         }
//       }
//     }
//   }
//   `;

// export const getProductVariants = gql`
//   query getProductVariants($productVariantIds: [ID!]!, $currencyCode: CurrencyCode!) {
//     nodes(ids: $productVariantIds) {
//       ... on ProductVariant {
//         quantityAvailable 
//         presentmentPrices(first:1, presentmentCurrencies:[$currencyCode]){
//           edges{
//             node{
//               compareAtPrice{
//                 amount
//                 currencyCode
//               }
//               price{
//                 amount
//                 currencyCode
//               }
//             }
//           }
//         } 
//         id
//         availableForSale
//         selectedOptions {
//           name
//           value
//         }
//         sku
//         title
//         image {
//           originalSrc
//           altText
//         }
//         product {
//           id
//           productType
//           title
//           handle
//           tags
//           variants (first: 100) {
//             edges {
//               node {
//                 quantityAvailable 
//                 presentmentPrices(first:1, presentmentCurrencies:[$currencyCode]){
//                   edges{
//                     node{
//                       compareAtPrice{
//                         amount
//                         currencyCode
//                       }
//                       price{
//                         amount
//                         currencyCode
//                       }
//                     }
//                   }
//                 } 
//                 id
//                 availableForSale
//                 selectedOptions {
//                   name
//                   value
//                 }
//                 sku
//                 title
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   `;

// export const getLast2Articles = gql`
//   {
//     articles(first: 2, reverse: true) {
//       edges {
//         node {
//           id
//           title
//           handle
//           blog {
//             id
//             title
//             handle
//           }
//           image {
//             id
//             originalSrc
//           }
//         }
//       }
//     }
//   }
// `;

// export const getArticlesByBlogHandle = gql`
//   query getArticlesByBlogHandle($handle: String!) {
//     blogByHandle(handle: $handle) {
//       id
//       articles(first: 10, reverse: true) {
//         edges {
//           node {
//             id
//             title
//             handle
//             blog {
//               title
//               handle
//             }
//             content(truncateAt: 125)
//             image {
//               originalSrc
//             }
//             publishedAt
//             url
//           }
//         }
//       }
//     }
//   }
// `;
// export const getBlogs = gql`
//   {
//     blogs(first: 4) {
//       edges {
//         node {
//           title
//           id
//           handle
//           articles(first: 12, reverse: true) {
//             edges {
//               node {
//                 title
//                 image {
//                   originalSrc
//                 }
//                 publishedAt
//                 id
//                 handle
//                 content(truncateAt: 125)
//                 blog {
//                   title
//                   handle
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     articles(first: 2, reverse: true) {
//       edges {
//         node {
//           title
//           handle
//           blog {
//             title
//             handle
//           }
//           image {
//             originalSrc
//           }
//         }
//       }
//     }
//   }
// `;

// export const getArticle = gql`
//   query getArticle($blogHandle: String!, $articleHandle: String!) {
//     blogByHandle(handle: $blogHandle) {
//       articleByHandle(handle: $articleHandle) {
//         id
//         title
//         contentHtml
//         image {
//           originalSrc
//         }
//         publishedAt
//         blog {
//           id
//           title
//         }
//         comments(first: 100, reverse: true) {
//           edges {
//             node {
//               id
//               author {
//                 email
//                 name
//               }
//               content
//             }
//           }
//         }
//       }
//     }
//   }
// `;
// export const getRecentArticles = gql`
//   {
//     articles(first: 3, reverse: true) {
//       edges {
//         node {
//           id
//           title
//           handle
//           blog {
//             id
//             title
//             handle
//           }
//           image {
//             id
//             originalSrc
//           }
//         }
//       }
//     }
//   }
// `;

// export const getCheckout = gql`
//   query($id: ID!, $currencyCode: CurrencyCode!) {
//     node(id: $id) {
//       id
//       ... on Checkout {
//         id
//         webUrl
//         totalTax
//         completedAt
//         subtotalPriceV2 {
//           amount
//         }
//         totalPriceV2 {
//           amount
//         }
//         customAttributes {
//           key
//           value
//         }
//         lineItems(first: 250) {
//           edges {
//             node {
//               id
//               customAttributes {
//                 key
//                 value
//               }
//               title
//               discountAllocations {
//                 allocatedAmount {
//                   amount
//                   currencyCode
//                 }
//               }
//               variant {
//                 id
//                 title
//                 quantityAvailable
//                 image {
//                   altText
//                   src
//                 }
//                 selectedOptions {
//                   name
//                   value
//                 }
//                 compareAtPrice
//                 price
//                 presentmentPrices(first:1, presentmentCurrencies: [$currencyCode]){
//                   edges{
//                     node{
//                       compareAtPrice{
//                         amount
//                         currencyCode
//                       }
//                       price{
//                         amount
//                         currencyCode
//                       }
//                     }
//                   }
//                 }  
//                 product {
//                   id
//                   handle
//                   variants (first: 100) {
//                     edges {
//                       node {
//                         id
//                         title
//                         selectedOptions {
//                           name
//                           value
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//               quantity
//             }
//           }
//         }
//       }
//     }
//   }
// `;

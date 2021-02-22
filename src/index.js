import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import { setContext } from 'apollo-link-context';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';

const httpLink = createHttpLink({
	uri: 'https://gobicashmereswiss.myshopify.com/api/2020-07/graphql.json'
});
const middlewareLink = setContext(() => ({
	headers: {
		'X-Shopify-Storefront-Access-Token': 'f883688960750eb93e240fcf3f95c687'
	}
}));

/**
 * Init ApolloClient.
 */
const client = new ApolloClient({
	link: middlewareLink.concat(httpLink),
	cache: new InMemoryCache()
});


ReactDOM.render(
	<ApolloProvider client={client}>
		<Main />
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';


const httpLink = new createHttpLink({
  uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clfsz1dlc2clm01uegdfzd77m/master',
  headers: {
    authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODMyNDAwNDUsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZnN6MWRsYzJjbG0wMXVlZ2RmemQ3N20vbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjBiYjVhYmE2LTAyYjAtNGRlNS1iYWMyLTQ0NTI3MDdkNDZlYiIsImp0aSI6ImNsaDlwbnZicTB2cG8wMXVmNWo2MmFta3kifQ.0YnBiMeUBKpm-yz-1BHaXF8DQphAaGWqZm9VNqadguYFqbyKaUes_8y0cRYjTfGVEaKrBhZ_YjdQzWa0BL8i3YOLMzGlGNi8caM3wbzkoZ3MbRc-MFneSl9bu6bfvBoc8uN4Yc3JL0mi_NFw4GDBpttNfUqp9OE8hZkmO5Tj5fSh1_bg5pBrO5E-kfZqGaI3Lz8wr4LJzJr3XpwuaJRqkfLpotFOrkGL1ovQSBiKZdNgHnLMbE0sZtvIsROZ9K7EEzx_xw3imHATkJ8BBO-XgDGRxkLl4Ustq-T7qdtfTDFuBOBhcgsfTot8eWroEtypBEfDXY9PANBOo04ds4v3iQTb8-0BdXQ81_o1AiQdIPItCo2OgCUyke-bwQp7KLiqEYfMiAL8iI4M9O2RGuoizX0Im8rJOYg4W5er4nDdvrs2R-XroGrWP8eiHY5nsDouc_AKC39LzvGtzbO08XFPzBVMpbUBYQtDUTuhWosB-x1ZyEltrNPjNLpalNgSgmk9ioR4d2wmji4k69kletf4oWSgNCNSIDuSKl3Ny2FluuiZeVRKbBhDPQhZsA-NgALWrhJk2oNy1O7hnl7iqfoEqWCImsGw9yEqcIAwkCLCBIOVxCchxh9DFYy3eq7hcO75ORVnogJ5wHenfamHWN8gC42a8CCrAiDXp5nPdG4anKs`,
  },
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
reportWebVitals();

'use strict';

const express = require('express');
const app = express();
const {resolve} = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const dotenv = require('dotenv');

// // Import the ElasticSearch module for Node.js
// const elasticsearch = require('elasticsearch');

// // Set up the client that handles communication with ElasticSearch
// const esClient = new elasticsearch.Client({
//   host: '192.168.1.3:9200',
//   log: 'error'
// });

// Serve static files from ../public
app.use(express.static(resolve(__dirname, 'public')));

// Send index.html for anything else.
app.get('/*', (_, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')));

app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});

// // Get articles from Core and store them in the variable "dataArray"
// var unirest = require("unirest");
// var req = unirest("GET", "https://core.ac.uk:443/api-v2/articles/search/quaternions");

// req.query({
//   "page": "1",
//   "pageSize": "10",
//   "metadata": "true",
//   "fulltext": "false",
//   "citations": "false",
//   "similar": "false",
//   "duplicate": "false",
//   "urls": "false",
//   "faithfulMetadata": "false",
//   "apiKey": "4HOb3jczlteJXLuyN1Wgxvqd60FQGiRP"
// });

// req.headers({
//   "postman-token": "8ae15513-3c07-3fc6-2d75-ec8ef1611ca6",
//   "cache-control": "no-cache",
//   "authorization": "Basic Og==",
//   "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
// });

// req.multipart([
//   {
//     "body": "apoinpe@bij.io"
//   },
//   {
//     "body": "juf"
//   }
// ]);

// req.end(res=> {
//   if (res.error) throw new Error(res.error);
//   console.log("GLADYS", res.body.data)
//   res.body.json();
// });


// //testing only (See Mystery on line 69)
// var dataArray = [{"id":"1"},{"id":"2"}]

// // Use ElasticSearch’s bulk method to import the data
// function bulkIndex(index, type, data) {
//   let bulkBody = [];
//   data.forEach(item => {
//     bulkBody.push({
//       index: {
//         _index: index,
//         _type: type,
//         _id: item.id
//       }
//     });

//     bulkBody.push(item);
//   });

//   esClient.bulk({body: bulkBody})
//   .then(response => {
//     console.log('here');
//     let errorCount = 0;
//     response.items.forEach(item => {
//       if (item.index && item.index.error) {
//         console.log(++errorCount, item.index.error);
//       }
//     });
//     console.log(
//       `Successfully indexed ${data.length - errorCount}
//        out of ${data.length} items`
//     );
//   })
//   .catch(console.err);
// };

// bulkIndex('library', 'article', dataArray);

// // Check that the data was indexed correctly
// function indices() {
//   return esClient.cat.indices({v: true})
//   .then(console.log)
//   .catch(err => console.error(`Error connecting to the es client: ${err}`));
// }

// indices();


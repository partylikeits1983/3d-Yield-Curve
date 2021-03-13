# 3d-Yield-Curve



Display treasury yields as a 3d yield curve in a browser using Javascript 

This is a simple way to display treasury yield data as a 3d yield curve using Plotly.js and JSON-SERVER.

You must install json-server and edit the index.js file to host the data pulled from Quandl. When starting JSON server, use --watch index.js

Example:

json-server --watch index.js --host (your local IP) --port 3000


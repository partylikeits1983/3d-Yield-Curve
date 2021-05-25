# 3d-Yield-Curve

## _Display treasury yields as a 3d yield curve in a browser using Javascript._


<p align="center">
   <img src="/doc/3dchart.png">
</p>


----

This is a simple way to display treasury yield data as a 3d yield curve using [Plotly.js](https://plotly.com/javascript/3d-surface-plots/) and [JSON-SERVER](https://github.com/typicode/json-server).

You must install json-server and edit the index.js file to host the data pulled from Quandl. When starting JSON server, use --watch index.js

Example:

json-server --watch index.js --host (your local IP) --port 3000


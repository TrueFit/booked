# API
## What is it
This is the api that connects to Office 365 to:
1. Retrieve Events
2. Add Events

## Requirements
1. npm install nodal -g

## To Run


const outlook = require("node-outlook");
outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');
const secret = "infnqhBF6xhdUwo3Dm0cqqc";

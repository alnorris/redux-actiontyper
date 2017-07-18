# Action Typer

Helper to create slightly less verbose redux action types. Uses ES6 Proxies!

`npm install actiontyper --save`

## Old way

```javascript

const GET_CLIENTS = 'GET_CLIENTS'
const GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS'
const GET_CLIENTS_FAIL = 'GET_CLIENTS_FAIL'
const SET_CLIENTS_FILTER = 'SET_CLIENTS_FILTER'
```

## New Way

```javascript
const { GET_CLIENTS,
	GET_CLIENTS_SUCCESS,
	GET_CLIENTS_FAIL, 
	SET_CLIENTS_FILTER } = actionTyper('HomeState/')
    
   console.log(GET_CLIENTS)  // HomeState/GET_CLIENTS
```

`
    `

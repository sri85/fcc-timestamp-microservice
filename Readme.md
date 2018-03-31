## TimeServer

Timeserver allows you to get the time in unix and natural time.
It returns unix time when the user passes a natural date
```
/GET /time/122434343
{
"natural":"January 18, 2015"
"unix:"122434343"
}
```
```
/GET /time/January 18, 2015
{
"natural":"January 18, 2015"
"unix:"122434343"
}
```
For Local Development

```
npm install -- Installs the Dependencies
npm start -- Starts the server
```

```
npm test -- Runs the tests

```
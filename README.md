# Simple Mailer
> For people who enjoy the simpler things in life! 😉

## Requirements
* NodeJS
* PM2 `npm i -g pm2`

## Setup
1) `npm i`
2) `cp config/local.example.json config/local.json`
3) Add your sender email `account`, `password` and `receipient` to config/local.json
4) `npm run watch`

## Example payload
`POST /mail`
```
{
  "address": "some@email.sender",
  "subject": "Hello World"
}
```

## NB! Enable Google App Access
1. Log into gmail
2. Select Account
3. search for `Less secure app access`
4. Enable checkbox

#### Logging
* run `pm2 log`
# Z-Wallet Website
<p align="center">
<img align="center" src="image-readme/zwallet-logo.PNG" width="360" height="430"> <img align="center" src="image-readme/vuejs-300x300.png" width="260" height="210">
</p>

## Table of Contents
- Introduction
- Features
- Requirements
- Usage
- Create Environment Variable
- Screenshots
- Related Project

### Introduction
<b>z wallet</b> is an online website that operates in the fintech sector, which provides an easier and faster transfer feature to fellow users. The hope is that the z wallet can expand fintech in Indonesia, and make it easier to transfer money to one another
### Features
- Users/Customers who are not logged in can only view landing page
- Users/Customers must sign up and sign in to send money to each other and see their profiles
- Users/Customers can add more than one cellphone number, and choose which one to be the primary phone number
- And others

### Requirements
- [npm](https://www.npmjs.com/package/module)
- [vue.js](https://www.vuejs.org)
- [vue.js-cli](https://cli.vuejs.org)
- [backend-Zwallet](https://github.com/Friemorn/BackEnd-PaymentApp-ZWallet)

### Usage for development
Open your terminal or command prompt
Type git clone https://github.com/alanard/frontend-zwallet/
Open the folder and type npm install for install dependencies
Create Environment Variable here
Before run this, you must run backend first
Type npm run serve if you use npm, or yarn serve if you use yarn, for run this app. Make sure your device is connected with debugging mode.

### Create Environment Variable
`
$ cp .env.example .env
`
`
$ nano .env
`
### Set API KEY
`
VUE_APP_BASE_URL=YOUR_HOST_URL
`
## Screenshots
<p align="center">
<img src="image-readme/landingpage.PNG" width="260" height="130"> <img src="image-readme/login.PNG" width="260" height="130">
<img src="image-readme/register.PNG" width="260" height="130"> <img src="image-readme/home.PNG" width="260" height="130">
<img src="image-readme/profile.PNG" width="260" height="130"> <img src="image-readme/updateuser.PNG" width="260" height="130">
<img src="image-readme/transfer.PNG" width="260" height="130"> <img src="image-readme/input pin.PNG" width="260" height="130"> 
<img src="image-readme/history transaction.PNG" width="260" height="130"> <img src="image-readme/create pin.PNG" width="260" height="130"> 
<img src="image-readme/chart.PNG" width="260" height="130"> <img src="image-readme/topup.PNG" width="260" height="130"> 
</p>

### Related Project (Backend)

[backend-Z-Wallet](https://github.com/Friemorn/BackEnd-PaymentApp-ZWallet)

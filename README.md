# Z-Wallet Website
<p align="center">
<img align="center" src="image-readme/zwallet-logo.PNG" width="300" height="450"> <img align="center" src="image-readme/vuejs-300x300.png" width="230" height="180">
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
<img src="readme_image/landingpage_navbar.PNG" width="250" height="120"> <img src="readme_image/landingpage_about_us.PNG" width="250" height="120">
<img src="readme_image/Landingpage_map_location.PNG" width="250" height="120"> <img src="readme_image/landingpage_ekstra_ordinary_menus.PNG" width="250" height="120">
<img src="readme_image/landingpage_most_popular.PNG" width="250" height="120"> <img src="readme_image/landingpage_cafe_location.PNG" width="250" height="120">
<img src="readme_image/landingpage_music.PNG" width="250" height="120"> <img src="readme_image/home/Register.PNG" width="250" height="120"> 
<img src="readme_image/home/login.PNG" width="250" height="140"> <img src="readme_image/home/home.PNG" width="250" height="120"> 
<img src="readme_image/home/home-add-cart.PNG" width="250" height="120"> <img src="readme_image/home/Products.PNG" width="250" height="120"> 
<img src="readme_image/home/products-add.PNG" width="250" height="120"> <img src="readme_image/home/products-update.PNG" width="250" height="120">
</p>

### Related Project (Backend)

[backend-Z-Wallet](https://github.com/Friemorn/BackEnd-PaymentApp-ZWallet)

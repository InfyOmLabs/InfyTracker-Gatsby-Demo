---
path: "/upgrades"
title: "Upgrades"
---

# Upgrade Guide

Before starting upgrade we recommenced to backup your files and export your current database.

**NOTE : If you are non-technical person then please use dist.zip to replace files and if you are technical person then use src.zip**

## Upgrade to latest version

### Upgrading from v2.0.0 to v2.0.1

#### For Technical Users:
- Download `v2.0.1`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v2.0.1` files into your existing version `v2.0.0`
- Run `composer install`
- Run `npm install`
- And at last Run `npm run dev` to make new build
- That's it!, you are ready to go with new version `v2.0.1`

#### For Non Technical Users:
- Download `v2.0.1`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v2.0.1` files/directories into your existing version `v2.0.0`
- That's it!, you are ready to go with new version `v2.0.1`

### Upgrading from v1.4.1 to v2.0.0

#### For Technical Users:
- Download `v2.0.0`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v2.0.0` files into your existing version `v1.4.1`
- Run `composer install`
- Run `php artisan migrate`
- Run `npm install`
- And at last Run `npm run dev` to make new build
- That's it!, you are ready to go with new version `v2.0.0`

#### For Non Technical Users:
- Download `v2.0.0`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v2.0.0` files/directories into your existing version `v1.4.1`
- Update database :
    - Open your `phpMyAdmin`
    - Go to your database and select import tab.
    - Now in latest version go to `app/database/releases/v.2.0.0/` you can find `v2.0.0.sql`
    - Select that sql file and import it.
- That's it!, you are ready to go with new version `v2.0.0`

### Upgrading from v1.4.0 to v1.4.1

#### For Technical Users:
- Download `v1.4.1`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v1.4.1` files into your existing version `v1.4.0`
- Run `composer install`
- Run `npm install`
- And at last Run `npm run dev` to make new build
- That's it!, you are ready to go with new version `v1.4.1`

#### For Non Technical Users:
- Download `v1.4.1`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v1.4.1` files/directories into your existing version `v1.4.0`
- That's it!, you are ready to go with new version `v1.4.1`

### Upgrading from v1.3.0 to v1.4.0

#### For Technical Users:
- Download `v1.4.0`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v1.4.0` files into your existing version `v1.3.0`
- Run `composer install`
- Run `npm install`
- And at last Run `npm run dev` to make new build
- That's it!, you are ready to go with new version `v1.4.0`

#### For Non Technical Users:
- Download `v1.4.0`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v1.4.0` files/directories into your existing version `v1.3.0`
- That's it!, you are ready to go with new version `v1.4.0`

### Upgrading from v1.2.0 to v1.3.0

#### For Technical Users:
- Download `v1.3.0`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v1.3.0` files into your existing version `v1.2.0`
- Run `composer install`
- Run `npm install`
- And at last Run `npm run dev` to make new build
- That's it!, you are ready to go with new version `v1.3.0`

#### For Non Technical Users:
- Download `v1.3.0`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v1.3.0` files/directories into your existing version `v1.2.0`
- That's it!, you are ready to go with new version `v1.3.0`

### Upgrading from v1.1.0 to v1.2.0

#### For Technical Users:
- Download `v1.2.0`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v1.2.0` files into your existing version `v1.1.0`
- You also need to add new `.env` variables of google/facebook auth and one signal credential. you can fine more info at [here](../docs/#_1-setup-environment-env-file)
- Run `php artisan migrate` to update database.
- Run `npm install`
- And at last Run `npm run dev` to make new build
- That's it!, you are ready to go with new version `v1.1.0`

#### For Non Technical Users:
- Download `v1.2.0`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v1.2.0` files into your existing version `v1.1.0`
- You also need to add new `.env` variables of google/facebook auth and one signal credential. you can fine more info at [here](../docs/#_1-setup-environment-env-file)
- Update database :
    - Open your `phpMyAdmin`
    - Go to your database and select import tab.
    - Now in latest version go to `app/database/releases/v.1.2.0/` you can find `v1.2.0.sql`
    - Select that sql file and import it.
- That's it!, you are ready to go with new version `v1.2.0`


### Upgrading from v1.0.0 to v1.1.0

#### For Technical Users:
- Download `v1.1.0`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v1.1.0` files into your existing version `v1.0.0`
- Run `php artisan migrate` to upgrade database.
- Run `npm install`
- And at last Run `npm run dev` to make new build
- That's it!, you are ready to go with new version `v1.1.0`

#### For Non Technical Users:
- Download `v1.1.0`
- Backup you current version files and DB
- If you have manually changed any files then please take a backup of them. After replacing files, you can again get that portion of code into some particular files.
- Replace `v1.1.0` files into your existing version `v1.0.0`
- Update database :
    - Open your `phpMyAdmin`
    - Go to your database and select import tab.
    - Now in latest version go to `app/database/releases/v.1.1.0/` you can find `v1.1.0.sql`
    - Select that sql file and import it.
- That's it!, you are ready to go with new version `v1.1.0`

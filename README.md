# Omnibus

## Requirements

-   Composer
-   PHP 7.x
-   MySQL or any database
-   Node JS 12.x

## Installation

### Laravel

1. After downloading from git, run `composer install`
2. Copy `.env.example` to `.env` and fill the required environment variables (esp. database)
3. Run `php artisan migrate` and `php artisan db:seed --class=UsersTableSeeder`

### Vue.js

1. Run `npm install`

## Development

1. Run `php artisan serve`
2. Run `npm run watch` when developing the views

## References

-   Laravel [https://laravel.com/](https://laravel.com/)
-   Vue.js [https://vuejs.org/](https://vuejs.org/)
-   Buefy [https://buefy.org/](https://buefy.org/)

## TODO

-   Integrate SSO login
-   Integrate Loyalty Program as module
-   Add roles and permissions

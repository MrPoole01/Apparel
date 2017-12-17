![miles-carter-collection](/capstone/client/apparel/src/assets/MCCLogo-01.png)
# Miles Carter Collection
Miles Cater Collection is a full e-commerce Web application featuring desiner t-shirts. The application was designed and implimented in 1 1/2 weeks. Mile Carter showcases great design skills along with the ability to complete a full stack CRUD e-commerce applicaton!

Link to Live site => https://miles-carter-collection.firebaseapp.com/

## Technology Used:
- Vue JS
- Bootstrap 4
- SweetAlert
- Stripe
- HTML5
- CSS3
- JavaScript ES6
- Knex JS
- Heroku
- PostgreSQL

## Set up a local postgres database
- npm install knex -g
- npm install
- knex migrate:latest
- knex seed:run
- npm run dev-start
- Go to port 3000 in your browser :)
- Deploy your own version to Heroku

## Set up a Heroku app for your project
- Set up a Heroku postgres database
- C- reate a .env file, use .env.example as a reference
- knex migrate:latest --env production
- knex seed:run --env production

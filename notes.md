STRUCTURING DB
!!!!!=====EVERY TABLE MUST HAVE A PRIMARY KEY=======!!!!!!
when inputting new rows string commonly use varchar
cannot  use null && unique together
can use req && unique together


============Steps to write tables //SQLITE=====
sql open db
create new db file
*use sqlite3 for .db3 accesss
save in spec file
save db name //auto tags db3
tables is where you create data 
right click open table creator

create row
select name
select data type
for key spec id must chose primary
and go into config to make sure it auto increments as things are added /post
(not nec but helpful unique and not null)
^save green checkmarks update or commit


============Steps to write tables //KNEX=====
git init -y
git ignore
npm i express/helmet/knex/sqlite3/
npm i nodemon -D

MIGRATION
like git flow for db
** EVERY CHANGE TO DB SCHEMA REQUIRES a new migration
KNEX CREATION
-- npm i -g knex
--knex init //creates knex file
and gives 3 dif environments --but looking at dev
give it a spec file name // './data/tbl_name.db3'
```
development: {
    client: 'sqlite3', // driver to use
    connection: {
      filename: './data/petsdb.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  ```
initalize the data folder
-- knex migrate:make #name

use migration to declare changes  we plan to make

write the up down 
```
exports.up = function(knex) {
    return knex.schema.createTable('pets', function (table) {
        table.increments();
        table.string('name');
        table.timestamps();
      })
  
};

exports.down = function(knex) {
    return knex.schema.table('pets', function (table) {
        table.dropColumn('name');
        table.string('first_name');
        table.string('last_name');
      })
  
};
```

initialize after creation or roll back
-- knex migrate:up
-- knex migrate:down
-- knex migrate:latest // update db to latest changes
-- knex migrate:rollback //undo multiple


to add new column 
--knex migrate:make #change name

the up down is limited scope from a brand new tbl


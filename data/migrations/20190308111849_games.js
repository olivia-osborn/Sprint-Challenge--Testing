exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", tbl => {
    tbl.increments();
    tbl
      .string("title", 128)
      .unique()
      .notNullable();
    tbl.string("genre", 128).notNullable();
    tbl.integer("releaseYear", 4);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("");
};

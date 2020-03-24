/**
 * O que faz para criar a tabela
 */
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};
/**
 * O que faz para desfazer a tabela em caso de erro
 */
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

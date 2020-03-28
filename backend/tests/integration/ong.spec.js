const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

// usar .set('Authorization', '145b335d') para dar um get na ong
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); //Limpa o banco de dados antes de executar
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async ()=> {
        
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Associação Madre Teresa de Calcutá Posto 2",
                email: "administrativo@amtc.com",
                whatsapp: "17921521378",
                city: "São José do Rio Preto",
                uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});
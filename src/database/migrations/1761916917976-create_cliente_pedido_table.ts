import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClientePedidoTable1761916917976 implements MigrationInterface {
    name = 'CreateClientePedidoTable1761916917976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "clienteId" integer`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_485346a40b61bb8ae3a98f5400c" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_485346a40b61bb8ae3a98f5400c"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "clienteId"`);
    }

}

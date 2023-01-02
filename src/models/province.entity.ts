import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Provincia")
export class Province extends BaseEntity {

    @PrimaryColumn({ name:"idProvincia", type: "int", nullable: false })
    Provincia: number;

    @Column({type: "varchar", length: 45, nullable: false })
    nombre: string;
}
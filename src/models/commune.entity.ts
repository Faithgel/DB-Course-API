import { Province } from "./province.entity";
import { Entity, BaseEntity, Column, PrimaryColumn, ManyToOne } from "typeorm";

@Entity("Comuna")
export class Commune extends BaseEntity {
    @PrimaryColumn({
        name: "idComuna",
        type: "int",
        nullable: false,
    })
    Comuna: number;

    @Column({ type: "varchar", length: 45, nullable: false })
    nombre: string;

    @Column({ type: "varchar", length: 45, nullable: false })
    tipo: string;

    @Column({ type: "int", nullable: false })
    nroHabitantes: number;

    @ManyToOne(() => Province, (province) => province, { nullable: false })
    id: Province;
}

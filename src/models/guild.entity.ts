import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Gremio")
export class Guild extends BaseEntity {
    @PrimaryGeneratedColumn({name:"idGremio"})
    Gremio: number;

    @Column({ type: "varchar", length: 45, nullable: false })
    nombre: string;

    @Column({ type: "varchar", length: 45, nullable: false })
    representante: string;

    @Column({ type: "varchar", length: 60, nullable: false })
    email: string;

    @Column({ type: "varchar", length: 90, nullable: false })
    direccion: string;

    @Column({ type: "varchar", length: 15, nullable: false })
    telefono: string;

    @Column({type: "varchar", length:45})
    descripcion: string;
}

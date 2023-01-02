import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity("Visitante")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    rut: number;

    @Column({ type: "varchar", length: 50, nullable: false })
    name: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    lastname: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    email: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    number: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    nationality: string;
}

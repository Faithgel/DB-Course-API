import { Guild } from './guild.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";

@Entity("Empresa")
export class Company extends BaseEntity {
    @PrimaryColumn({ type: "int", nullable: false })
    rutEmpresa: number;

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

    @Column({ type: "varchar", length: 90, nullable: false })
    ubicacionTerritorial: string;

    @ManyToOne(()=> Guild , (guild) => guild,{nullable: false})
    id: Guild;
}
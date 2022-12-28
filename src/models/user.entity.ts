import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
} from "typeorm";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    username: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

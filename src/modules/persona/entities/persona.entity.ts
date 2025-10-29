import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('persona') 
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @OneToOne(() => User, (user) => user.persona)
    @JoinColumn() 
    user: User;
}
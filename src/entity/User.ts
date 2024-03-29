import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Comment } from "./Comment"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string 

    @OneToMany(() => Comment, (comment) => comment.users, { cascade: true})
    comments: Comment[]

}

import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class MenuItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column({ type: 'integer', default: null })
    parentId: number;

    @Column({ type: 'datetime' })
    createdAt: string;

    @ManyToOne(() => Event, (item) => item.children)
    parentMenuItem: MenuItem;

    @OneToMany(() => MenuItem, (children) => children.parentMenuItem, {
        cascade: true,
    })
    children: MenuItem[]
}

import {Entity, Column, PrimaryGeneratedColumn,
        CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    price: number;

    @Column()
    image: string;

    @Column()
    description: string;

    @Column()
    sub_description: string;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

}

export default Product;
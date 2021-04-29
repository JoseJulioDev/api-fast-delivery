import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

}

export default Product;
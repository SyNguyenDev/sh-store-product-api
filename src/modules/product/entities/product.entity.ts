import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  category: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'simple-array', nullable: true })
  aboutItem: string[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int', default: 0 })
  discount: number;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true })
  rating: number;

  @Column({ type: 'int', default: 0 })
  stockItems: number;

  @Column({ type: 'jsonb', nullable: true })
  reviews: {
    content: string;
    rating: number;
    author: string;
    image: string;
    date: string;
  }[];

  @Column({ type: 'varchar', length: 100, nullable: true })
  brand: string;

  @Column({ type: 'simple-array', nullable: true })
  color: string[];

  @Column({ type: 'simple-array', nullable: true })
  images: string[];
}

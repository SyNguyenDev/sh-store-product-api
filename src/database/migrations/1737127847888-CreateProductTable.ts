import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductTable1737127847888 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'name', type: 'varchar' },
          { name: 'category', type: 'varchar' },
          { name: 'description', type: 'text' },
          { name: 'aboutItem', type: 'json' },
          { name: 'price', type: 'decimal', precision: 10, scale: 2 },
          { name: 'discount', type: 'int' },
          { name: 'rating', type: 'decimal', precision: 3, scale: 2 },
          { name: 'stockItems', type: 'int' },
          { name: 'reviews', type: 'json' },
          { name: 'brand', type: 'varchar' },
          { name: 'color', type: 'json' },
          { name: 'images', type: 'json' },
        ],
      }),
    );

    // Insert data into the products table
    await queryRunner.query(
      `INSERT INTO products (id, name, category, description, "aboutItem", price, discount, rating, "stockItems", reviews, brand, color, images)
      VALUES 
      (1, 'Apple Watch Series 9 [GPS 45mm] Smartwatch with Midnight Aluminum Case', 'Watches', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatem aliquam reprehenderit debitis quidem accusantium quas reiciendis quae, enim nesciunt, illo sit ea aspernatur quo perferendis! Cumque fuga impedit corrupti!',
        '["WHY APPLE WATCH SERIES 9 — Your essential companion for a healthy life is now even more powerful. The S9 chip enables a super-bright display and a magical new way to quickly and easily interact with your Apple Watch without touching the screen. Advanced health, safety and activity features provide powerful insights and help when you need it. And redesigned apps in watchOS give you more information at a glance.", "CARBON NEUTRAL — An aluminium Apple Watch Series 9 paired with the latest Sport Loop is carbon neutral.", "ADVANCED HEALTH FEATURES—Keep an eye on your blood oxygen. Take an ECG anytime. Get notifications if you have an irregular heart rhythm. See how much time you spent in REM, Core, or Deep sleep with sleep stages. Temperature sensing provides insights into overall well-being and cycle tracking. And take note of your state of mind to help build emotional awareness and resilience." ]',
        400, 10, 4.5, 5, '[{"content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatem aliquam reprehenderit debitis quidem accusantium", "rating": 4, "author": "Shohag miah", "image": "/images/people/person.jpg", "date": "${new Date().toISOString()}"}]', 'Apple', '["white", "gray", "blue", "silver"]', '["/images/products/apple-watch-9-removebg-preview.png", "/images/products/apple-watch-9-3-removebg-preview.png"]'),
      (2, 'Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch w/Starlight Aluminium Case & Starllight Sport Band', 'Watches', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatem aliquam reprehenderit debitis quidem accusantium quas reiciendis quae, enim nesciunt, illo sit ea aspernatur quo perferendis! Cumque fuga impedit corrupti!',
        '["Tangent Impulse Open-ear wireless headphones are more comfortable to wear for long hours, as they do not create any pressure in the ears | Ultra-Lightweight, just weighing 16 gms.", "SafeBeats Design, these Bluetooth earphones rest gently on the outer ear, relieving pressure & preventing damage to the eardrums | Beware of your surroundings while Listening to Music", "Large 13mm Dynamic Drivers for Immersive Stereo Sound Experience | Enjoy music for up to 10 hours on a single charge", "Bluetooth V5.3 with 1-Step Pairing, 10 meters Strong Wireless Connectivity & Dual-Device Pairing | Access Your Phones Voice Assistant Instantly thru Tangent Impulse | Touch Control in Right Earbud" ]',
        300, 10, 4.3, 10, '[{"content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatem aliquam reprehenderit debitis quidem accusantium", "rating": 4, "author": "Shohag miah", "image": "/images/people/person.jpg", "date": "${new Date().toISOString()}"}]', 'Apple', '["white", "gray", "black", "red"]', '["/images/products/apple-watch-se-removebg-preview.png", "/images/products/apple-watch-se-2-removebg-preview.png"]');
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the products table
    await queryRunner.dropTable('products');
  }
}

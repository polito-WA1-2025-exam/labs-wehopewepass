import dayjs from 'dayjs';
import { connectDB } from './dbConfig.mjs';
import { createUsersTable } from './migrations/user.mjs';
import { createIngredientsTable } from './migrations/ingredients.mjs';
import { createPokeBowlsTable } from './migrations/pokebowls.mjs';
import { createOrdersTable } from './migrations/orders.mjs';
import { createAvailabilityTable } from './migrations/availability.mjs';
import { createOrderLogTable } from './migrations/orderlog.mjs';

(async () => {
    const db = await connectDB();

    await createUsersTable(db)
    await createIngredientsTable(db)
    await createPokeBowlsTable(db)
    await createOrdersTable(db)
    await createAvailabilityTable(db)
    await createOrderLogTable(db)

    await db.run(`INSERT INTO users (name, surname, email, date, address) VALUES (?, ?, ?, ?, ?)`,
        'John', 'Doe', 'john@example.com', dayjs().format('YYYY-MM-DD'), '123 Main St');

    await db.run(`INSERT INTO ingredients (name, price) VALUES (?, ?), (?, ?), (?, ?)`,
        'Salmon', 3.5, 'Avocado', 2, 'Seaweed', 1.5);

    await db.run(`INSERT INTO pokebowls (size, base, price) VALUES (?, ?, ?), (?, ?, ?)`,
        'Medium', 'Rice', 10, 'Large', 'Quinoa', 12);

    await db.run(`INSERT INTO orders (userId, timestamp, message, totalAmount) VALUES (?, ?, ?, ?)`,
        1, dayjs().format(), 'Extra spicy', 12);

    await db.run(`INSERT INTO availability (size, quantity) VALUES (?, ?), (?, ?), (?, ?)`,
        'R', 10, 'M', 8, 'L', 6);

    await db.run(`INSERT INTO order_log (userEmail, orderId) VALUES (?, ?)`,
        'john@example.com', 1);


    console.log('Database seeded successfully!');
    await db.close();
})();

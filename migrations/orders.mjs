export const createOrdersTable = async (db) => {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId INTEGER,
            timestamp DATE,
            message TEXT,
            totalAmount REAL,
            FOREIGN KEY(userId) REFERENCES users(id)
        );
    `);
};
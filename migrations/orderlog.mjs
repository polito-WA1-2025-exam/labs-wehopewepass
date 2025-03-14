export const createOrderLogTable = async (db) => {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS order_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userEmail TEXT,
            orderId INTEGER,
            FOREIGN KEY(orderId) REFERENCES orders(id)
        );
    `);
};
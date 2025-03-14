export const createUsersTable = async (db) => {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            surname TEXT,
            email TEXT,
            date DATE,
            address TEXT,
            authToken TEXT
        );
    `);
};

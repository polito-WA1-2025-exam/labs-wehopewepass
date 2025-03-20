export const createPokeBowlsTable = async (db) => {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS pokebowls (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            size TEXT,
            base TEXT,
            price REAL
        );
    `);
};
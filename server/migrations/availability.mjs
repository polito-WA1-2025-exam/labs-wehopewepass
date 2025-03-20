export const createAvailabilityTable = async (db) => {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS availability (
            size TEXT PRIMARY KEY,
            quantity INTEGER
        );
    `);
};


import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export  const connectDB = async () => {
    return open({
        filename: './pokeshop.db',
        driver: sqlite3.Database
    })
}

export default connectDB


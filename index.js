// const postgres = require('postgres');
import postgres from 'postgres';

const sql = postgres({
    host: 'host.docker.internal',
    port: 5432,
    database: 'mydatabase',
    username: 'user',
    password: 'Password1!'
});

// const sql = postgres();
// const [{ version }] = await sql`SELECT version()`;
//
// console.log(version);

//
async function main() {
    const tableName = 'TestTable';

    // Create table if it doesn't exist
    await sql`
    CREATE TABLE IF NOT EXISTS ${sql(tableName)} (
      Id SERIAL PRIMARY KEY,
      Name TEXT
    )
  `;

    // Insert a row
    await sql`
    INSERT INTO ${sql(tableName)} (Name) VALUES ('Test Name')
  `;

    // Retrieve all rows
    const rows = await sql`
    SELECT * FROM ${sql(tableName)}
  `;

    for (const row of rows) {
        console.log(`Id: ${row.id}, Name: ${row.name}`);
    }
}

main();
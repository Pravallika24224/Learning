import { Client } from 'pg'

async function createUsersTable() {
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:V6lC9nFMjTOR@ep-bold-band-a5eyk7hv.us-east-2.aws.neon.tech/neondb?sslmode=require'
  })
  try {
    await client.connect()
    const result = await client.query(`
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
  `)
    console.log(result)
  }
  catch (err) {
    console.error(err, "error occurd")
  } finally {
    await client.end()
  }
}

async function createAddressesTable() {
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:V6lC9nFMjTOR@ep-bold-band-a5eyk7hv.us-east-2.aws.neon.tech/neondb?sslmode=require'
  })
  try {
    await client.connect()
    const insertQuery = `
  CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    street VARCHAR(200) NOT NULL,
    city VARCHAR(200) NOT NULL,
    pincode VARCHAR(20),
    country VARCHAR(200) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  )
  `
    const response = await client.query(insertQuery)
    console.log(response)
  }
  catch (err) {
    console.error(err, "error occurd")
  } finally {
    await client.end()
  }
}
createUsersTable()
createAddressesTable()
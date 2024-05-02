import { Client } from "pg";

async function insertUserAndAddress(
  username: string,
  email: string,
  password: string,
  street: string,
  city: string,
  pincode: string,
  country: string
) {
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:V6lC9nFMjTOR@ep-bold-band-a5eyk7hv.us-east-2.aws.neon.tech/neondb?sslmode=require'
  })
  try {
    await client.connect()
    await client.query('BEGIN')
    const insertUserQuery = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    REURNING id;
    `
    const userRes = await client.query(insertUserQuery, [username, email, password])
    const userId = userRes.rows[0].id
    const insertAddressQuery = `
    INSERT INTO addresses (userId, street, city, pincode, country)
    VALUES ($1, $2, $3, $4)
    `
    await client.query(insertAddressQuery, [userId, street, city, pincode, country])
    await client.query('COMMIT')
    console.log('User and address inserted successfully');
  } 
  catch(err) {
    await client.query('ROLLBACK'); 
    console.error(err, "error occured")
  }
  finally {
    client.end()
  }
}

insertUserAndAddress('pravs', 'pravs@gmail.com', '12345', 'abc street', 'abc city', '1234', 'country')
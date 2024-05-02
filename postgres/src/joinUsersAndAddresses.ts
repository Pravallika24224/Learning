import { Client } from "pg";

async function getUserDetailsWithAddresses(userId: string) {
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:V6lC9nFMjTOR@ep-bold-band-a5eyk7hv.us-east-2.aws.neon.tech/neondb?sslmode=require'
  })
  try {
    await client.connect()
    const insertData = `
    SELECT u.id, u.username, u.email, u.password, 
    FROM users u
    JOIN addresses a ON u.id = a.user_id
    `
    const result = await client.query(insertData, [userId])
    if (result.rows.length > 0) {
      console.log('User and address found:', result.rows[0]);
      return result.rows[0];
  } else {
      console.log('No user or address found with the given ID.');
      return null;
  }
  }
  catch(err) {
    console.error(err, "error occured")
  } finally {
    await client.end()
  }
}

getUserDetailsWithAddresses("1")
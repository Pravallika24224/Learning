import { Client } from "pg";



// //insecure way
async function insertData() {
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:V6lC9nFMjTOR@ep-bold-band-a5eyk7hv.us-east-2.aws.neon.tech/neondb?sslmode=require'
  })
  try{
  await client.connect();
  const insertQuery = `
  INSERT INTO users (username, email, password) 
  VALUES('Pravallika', 'pravallika@gmail.com', 'Pravallika10');
  `;
  const response = await client.query(insertQuery)
  console.log(response)
  }
  catch(err) {
    console.error(err, 'Error during the insertion')
  } finally {
    await client.end()
  }
}

//secure way
async function insertDataSecurely(username: string, email: string, password: string) {
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:V6lC9nFMjTOR@ep-bold-band-a5eyk7hv.us-east-2.aws.neon.tech/neondb?sslmode=require'
  })
  try {
    await client.connect()
    const insertQuery = `
    INSERT INTO users(username, email, password) 
    VALUES ($1, $2, $3)
    `;
    const values = [username, email, password]
    const response = await client.query(insertQuery, values);
    console.log("Insersion Success:", response);    
  }
  catch(err) {
    console.error(err, 'Error during the insertion')
  } finally {
    await client.end()
  }
}

// insertData()

insertDataSecurely('securePravs', 'secure@gmail.com', 'password').catch(console.error);

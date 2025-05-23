import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();


console.log("🌱 Database seeded.");

async function seedEmployees() {


    await createEmployee("Harry Potter", '1987-01-01', 120000)
    await createEmployee("John Prosser", '1988-12-01', 145000)
    await createEmployee("Travis Washington", '1983-11-11', 750000)
    await createEmployee("Tony Romo", '1979-02-01', 200000)
    await createEmployee("Tim Goings", '1987-04-01', 360000)
    await createEmployee("Max Million", '1980-12-05', 500000)
    await createEmployee("Tron Williams", '1990-02-06', 950000)
    await createEmployee("Tonie Brax", '1988-07-10', 550000)
    await createEmployee("Cassie Williams", '1992-02-06', 650000)
    await createEmployee("Bonnie Swish", '1984-08-12', 450000)
   
await db.end() 
  
}

seedEmployees()
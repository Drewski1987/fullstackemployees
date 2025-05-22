import db from "#db/client"


/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  const result = await db.query(
    'INSERT INTO employees (name, birthday, salary) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;', [name, birthday, salary]
  )
  return result
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees(name, birthday, salary) {
    const result = await db.query('SELECT * FROM employees;')
    return result
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
}

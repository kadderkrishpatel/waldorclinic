import { Pool } from "pg";
import { randomBytes } from "crypto";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

function generateId() {
  return randomBytes(12).toString("hex");
}

export async function saveContactSubmission(data: {
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string;
  treatment: string[];
  message: string;
}) {
  const query = `
    INSERT INTO contact_submissions (id, "firstName", "lastName", email, phone, treatment, message, status, "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
  `;

  const id = generateId();

  await pool.query(query, [
    id,
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.treatment,
    data.message,
    "new",
  ]);

  return id;
}

export async function saveCareersSubmission(data: {
  firstName: string;
  lastName: string | null;
  email: string;
  subject: string;
  message: string;
}) {
  const query = `
    INSERT INTO careers_submissions (id, "firstName", "lastName", email, subject, message, status, "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
  `;

  const id = generateId();

  await pool.query(query, [
    id,
    data.firstName,
    data.lastName,
    data.email,
    data.subject,
    data.message,
    "new",
  ]);

  return id;
}

// Flags a saved enquiry whose notification email could not be sent, so the
// clinic can find it in the database.
export async function markSubmissionEmailFailed(
  table: "contact_submissions" | "careers_submissions",
  id: string,
) {
  await pool.query(
    `UPDATE ${table} SET status = 'email_failed', "updatedAt" = NOW() WHERE id = $1`,
    [id],
  );
}

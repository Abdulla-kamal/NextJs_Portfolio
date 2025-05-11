"use server";
import { neon } from "@neondatabase/serverless";
import { Project } from "./types";


// Create Project 
export async function createProject(formData: FormData) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    await sql`
      INSERT INTO projects (name, description)
      VALUES (${name}, ${description});
    `;
  } catch (error) {
    console.error("Insert failed:", error);
  }
}

// Fetch All Projects 
export async function getAllProjects(): Promise<Project[]> {
  try {
    const sql = neon(`${process.env.DATABASE_URl}`);
    const projects = await sql`
    SELECT * FROM projects`;
    return projects as Project[];
  } catch (err) {
    console.error("Fail to load projects 😔", err);
    return [];
  }
}

// Fetch One Project 
export async function getProjectById(id:number): Promise<Project> {
  try {
    const sql = neon(`${process.env.DATABASE_URl}`);
    const project = await sql`
    SELECT * FROM projects WHERE id = ${id}`;

    return project[0] as Project;
  } catch (err) {
    console.error("Fail to load projects 😔", err);
    return {} as Project;
  }
}

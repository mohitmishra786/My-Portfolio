import { Project } from "../typing";

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/getProjects`);

    const data = await res.json()
    const projects: Project[] = data.projects;

    return projects
}


import { Experience } from "../typing";

export const fetchExperience = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

    const data = await res.json()
    const experiences: Experience[] = data.experiences;

    return experiences
}


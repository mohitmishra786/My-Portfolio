import { Experience } from "../typing";

export const fetchExperience = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/getExperience`);

    const data = await res.json()
    const experiences: Experience[] = data.experiences;

    return experiences
}


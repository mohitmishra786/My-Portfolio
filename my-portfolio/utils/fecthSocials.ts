import { Social } from "../typing";

export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/getSocials`);

    const data = await res.json()
    const socials: Social[] = data.socials;

    return socials
}


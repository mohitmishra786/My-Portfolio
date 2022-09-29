import { PageInfo } from "../typing";

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/getPageInfo`);

    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo
}


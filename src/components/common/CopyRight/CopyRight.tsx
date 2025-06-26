import type { CopyRightProps } from "./CopyRight.types";

export default function CopyRight({year,url,companyName,textRights}:CopyRightProps){
    return <>
        <span 
            className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © {year} <a href={url} className="hover:underline text-blue-500 font-semibold">{companyName}</a>. {textRights}
        </span>
    </>
}
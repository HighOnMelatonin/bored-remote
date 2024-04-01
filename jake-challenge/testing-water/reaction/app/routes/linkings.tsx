import { Link } from "@remix-run/react";

// type filePath = {
//     file: string
// };

export default function Linkings({ file }: {file: string}) {
    return (
        <Link to={ file }>{ file }</Link>
    )
}
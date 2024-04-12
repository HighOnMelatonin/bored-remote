import { Link } from "@remix-run/react";

// type filePath = {
//     file: string
// };

export default function Linkings({ file }: {file: string}) {
    return (
        <p><Link to={ file }>{ file }</Link></p>
    )
}
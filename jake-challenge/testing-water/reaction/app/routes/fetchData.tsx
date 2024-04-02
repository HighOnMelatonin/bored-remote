import { useEffect, useState } from "react";

export default function Page(){
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);

    useEffect(() => {
        let ignore = false;
        setBio(null);
        fetchBio(person).then(result => {
            if (!ignore){
                setBio(result);
            }
        });

        return () => {
            ignore = true;
        };
    }, [person]);
}
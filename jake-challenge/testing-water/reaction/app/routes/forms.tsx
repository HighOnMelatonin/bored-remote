import { Form } from "@remix-run/react";


export default function GetEntry() {
    function saveEntry(formData){
        const entry = formData.get("entry");
        alert("You have entered: " + entry)
        console.log(entry);
        return entry;
    }

    // how in the heck do i get an action
    return(
        <div>
            <Form action={saveEntry} method="post">
                <input type = "text" name="entry"/>
                <button type = "submit">Submit</button>
            </Form>
        </div>
    )
}

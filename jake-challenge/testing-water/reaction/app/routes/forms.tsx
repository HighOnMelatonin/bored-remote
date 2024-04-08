

export default function GetEntry() {
    async function saveEntry(e) {
        e.preventDefault()
        const form = document.querySelector('#entryForm')
        const formData = new FormData(form);
        
        console.log(formData)

        const response = await fetch("http://localhost:5000/", {
            method: "post",
            body: formData,
        });
        console.log(await response.json())
    }



    // how in the heck do i get an action
    return (
        <div>
            <form encType="multipart/form-data" id="entryForm" method="post" onSubmit={saveEntry}>
                <input type="text" name="entry" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

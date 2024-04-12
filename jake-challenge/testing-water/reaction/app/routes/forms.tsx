

export default function GetEntry() {
    async function saveEntry(e) {
        e.preventDefault()
        const form = document.querySelector('#entryForm')
        const formData = new FormData(form);
        

        // const response = await fetch("http://localhost:5000/", {
        //     method: "post",
        //     body: formData,
        // });

        console.log(formData.get("entry"))
        console.log(await response.text())
    }



    // how in the heck do i get an action
    return (
        <div>
            <form encType="multipart/form-data" id="entryForm" method="post" onSubmit={saveEntry}>
                <input type="text" name="entry" />
                <button type="submit">Submit</button>
                <p>{}</p>
            </form>
        </div>
    )
}

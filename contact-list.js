const setEditModal = (contact_name) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", `http://localhost:3000/contact/${contact_name}`, false);
    xhttp.send();
    const details = JSON.parse(xhttp.responseText);
    document.getElementById('editForm').action = `http://localhost:3000/contact/${contact_name}`;
    document.getElementsByName('contact_name')[0].value = details.contact_name;
    document.getElementsByName('contact_profession')[0].value = details.contact_profession;
    document.getElementsByName('contact_tel_number')[0].value = details.contact_tel_number;
    document.getElementsByName('contact_mobile_number')[0].value = details.contact_mobile_number;
}

const deleteBook = (contact_name) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", `http://localhost:3000/contact/${contact_name}`, false);
    xhttp.send();
    document.getElementsByTagName('html')[0].innerHTML = xhttp.responseText;
}

const loadContacts = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/contact", false);
    xhttp.send();

    const contacts = JSON.parse(xhttp.responseText);

    for (let contact of contacts) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${contact.contact_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${contact.contact_profession}</h6>
                        <div>Tel Number: ${contact.contact_tel_number}</div>
                        <div>Mobile Number: ${contact.contact_mobile_number}</div>
                        <hr>
                        <button type="button" class="btn btn-primary" data-toggle="modal" onclick="deleteBook('${contact.contact_name}');">
					Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal" onclick="$('#editContactModal').modal('show');setEditModal('${contact.contact_name}');">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('contacts').innerHTML = document.getElementById('contacts').innerHTML + x;
    }
}

loadContacts();
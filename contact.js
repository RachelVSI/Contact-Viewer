"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";

let command = prompt(menuString);

while (command !== "exit" && command !== null) {


    if (command === "list") {
        let contactList = "";

        for (let contact of contacts) {
            let contactInfo = contact.split("|");
            contactList += contactInfo[0] + " - " + contactInfo[1] + "\n";
        }

        alert(contactList);
    }
    else if (command.startsWith("get ")) {
        let number = command.substring(4);
        let found = false;

        for (let contact of contacts) {
            let contactInfo = contact.split("|");

            if (contactInfo[0] === number) {
                alert("Contact info for " + contactInfo[1] + "\n" +
                      "Email: " + contactInfo[2] + "\n" +
                      "Phone: " + contactInfo[3]);
                found = true;
                break;
            }
        }

        if (!found) {
            alert("No data for #" + number);
        }
    }
    else {
        alert("Invalid command");
    }

    command = prompt(menuString);
}
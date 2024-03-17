import { program } from "commander";
import * as contactServis from "./contact.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allContacts = await contactServis.listContacts();
      return console.table(allContacts);
    case "getById":
      const oneContact = await contactServis.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contactServis.addContact(data);
      return console.log(newContact);
    case "deleteById":
      const deleteContact = await contactServis.removeContact(id);
      return console.log(deleteContact);
    default:
      console.log("Unknown action");
  }
};

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);

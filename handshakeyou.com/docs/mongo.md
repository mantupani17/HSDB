
<!-- update all records with status Active in uses collection -->
db.users.update({}, {$set: {status:'Active'}}, { multi: true });
db.users.updatemany({}, {$set: {status:'Active'}});
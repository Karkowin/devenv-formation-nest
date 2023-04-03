db.createUser(
  {
    user: "C5p69YHr",
    pwd: "H7Ym9L68",
    roles: [
      {
        role: "readWrite",
        db: "dev"
      }
    ]
  }
);

db.createCollection('init');
db.init.insertOne(
  {
    default: 'init'
  }
);
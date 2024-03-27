/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bpbz67ibrzkaej2",
    "created": "2023-12-19 02:09:13.485Z",
    "updated": "2023-12-19 02:09:13.485Z",
    "name": "sex",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "czpzaqkb",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bpbz67ibrzkaej2");

  return dao.deleteCollection(collection);
})

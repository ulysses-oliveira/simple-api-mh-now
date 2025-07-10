-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_weapon_types" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "icon" TEXT
);
INSERT INTO "new_weapon_types" ("icon", "id", "name") SELECT "icon", "id", "name" FROM "weapon_types";
DROP TABLE "weapon_types";
ALTER TABLE "new_weapon_types" RENAME TO "weapon_types";
CREATE UNIQUE INDEX "weapon_types_name_key" ON "weapon_types"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

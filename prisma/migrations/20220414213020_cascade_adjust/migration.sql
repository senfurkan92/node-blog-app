-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_profiles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bio" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_profiles" ("bio", "id", "userId") SELECT "bio", "id", "userId" FROM "profiles";
DROP TABLE "profiles";
ALTER TABLE "new_profiles" RENAME TO "profiles";
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");
CREATE TABLE "new_pots" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "pots_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE SET DEFAULT ON UPDATE CASCADE
);
INSERT INTO "new_pots" ("authorId", "content", "createAt", "id", "isActive", "published", "title", "updateAt") SELECT "authorId", "content", "createAt", "id", "isActive", "published", "title", "updateAt" FROM "pots";
DROP TABLE "pots";
ALTER TABLE "new_pots" RENAME TO "pots";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

# Migration `20200919132051-test`

This migration has been generated by ddamjengi1020 at 9/19/2020, 10:20:51 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "test" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200919115928-wtf..20200919132051-test
--- datamodel.dml
+++ datamodel.dml
@@ -4,9 +4,9 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -27,8 +27,9 @@
   rooms     Room[] @relation(references: [id])
   fromMessage Message[] @relation("from")
   ToMessage Message[] @relation("to")
   loginSecret String?
+  test String?
 }
 model Post {
   id       Int @id @default(autoincrement())
```


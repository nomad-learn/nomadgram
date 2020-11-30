# Migration `20201127134643`

This migration has been generated by ddamjengi1020 at 11/27/2020, 10:46:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Comment" ADD COLUMN "createAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updateAt" timestamp(3)   

ALTER TABLE "public"."File" ADD COLUMN "createAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updateAt" timestamp(3)   

ALTER TABLE "public"."Like" ADD COLUMN "createAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updateAt" timestamp(3)   

ALTER TABLE "public"."Message" ADD COLUMN "createAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updateAt" timestamp(3)   

ALTER TABLE "public"."Post" ADD COLUMN "createAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updateAt" timestamp(3)   ,
ALTER COLUMN "location" DROP NOT NULL

ALTER TABLE "public"."Room" ADD COLUMN "createAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updateAt" timestamp(3)   

ALTER TABLE "public"."User" ADD COLUMN "createAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updateAt" timestamp(3)   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201124131827..20201127134643
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
@@ -27,27 +27,33 @@
   rooms     Room[] @relation(references: [id])
   fromMessage Message[] @relation("from")
   ToMessage Message[] @relation("to")
   loginSecret String?
+  createAt  DateTime @default(now())
+  updateAt  DateTime? @updatedAt()
 }
 model Post {
   id       String @id @default(uuid())
-  location String
+  location String?
   caption  String
   user     User @relation(fields: [userId], references: [id])
   userId   String
   likes    Like[]
   comments Comment[] 
   files    File[] 
+  createAt  DateTime @default(now())
+  updateAt  DateTime? @updatedAt()
 }
 model Like {
   id     String @id @default(uuid())
   user   User @relation(fields: [userId], references: [id])
   userId String
   post   Post @relation(fields: [postId], references: [id])
   postId String
+  createAt  DateTime @default(now())
+  updateAt  DateTime? @updatedAt()
 }
 model Comment {
   id     String @id @default(uuid())
@@ -55,29 +61,37 @@
   user   User @relation(fields: [userId], references:[id])
   userId String
   post   Post @relation(fields: [postId], references: [id])
   postId String
+  createAt  DateTime @default(now())
+  updateAt  DateTime? @updatedAt()
 }
 model File {
   id     String @id @default(uuid())
   url    String
   post   Post @relation(fields: [postId], references: [id])
   postId String
+  createAt  DateTime @default(now())
+  updateAt  DateTime? @updatedAt()
 }
 model Room {
-    id           String @id @default(uuid())
-    participants User[] @relation(references: [id])
-    messages     Message[]
+  id           String @id @default(uuid())
+  participants User[] @relation(references: [id])
+  messages     Message[]
+  createAt  DateTime @default(now())
+  updateAt  DateTime? @updatedAt()
 }
 model Message {
-    id     Int @id @default(autoincrement())
-    text   String
-    from   User @relation("from", fields:[fromUserId], references: [id])
-    fromUserId String
-    to     User @relation("to", fields: [toUserId], references: [id])
-    toUserId String
-    room   Room @relation(fields: [roomId], references:[id])
-    roomId String
+  id     Int @id @default(autoincrement())
+  text   String
+  from   User @relation("from", fields:[fromUserId], references: [id])
+  fromUserId String
+  to     User @relation("to", fields: [toUserId], references: [id])
+  toUserId String
+  room   Room @relation(fields: [roomId], references:[id])
+  roomId String
+  createAt  DateTime @default(now())
+  updateAt  DateTime? @updatedAt()
 }
```


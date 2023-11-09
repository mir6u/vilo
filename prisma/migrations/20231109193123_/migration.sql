/*
  Warnings:

  - You are about to drop the column `accessTokenExpires` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `providerId` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `providerType` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `accessToken` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `verificationrequest` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `verificationrequest` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provider` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Account_providerId_providerAccountId_key` ON `account`;

-- DropIndex
DROP INDEX `Session_accessToken_key` ON `session`;

-- AlterTable
ALTER TABLE `account` DROP COLUMN `accessTokenExpires`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `providerId`,
    DROP COLUMN `providerType`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `expires_at` DATETIME(3) NULL,
    ADD COLUMN `provider` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `session` DROP COLUMN `accessToken`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `verificationrequest` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- CreateIndex
CREATE UNIQUE INDEX `Account_provider_providerAccountId_key` ON `Account`(`provider`, `providerAccountId`);

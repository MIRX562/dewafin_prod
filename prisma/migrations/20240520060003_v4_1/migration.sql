/*
  Warnings:

  - Added the required column `final` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `income` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initial` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `net` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outcome` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refund` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "final" BIGINT NOT NULL,
ADD COLUMN     "income" BIGINT NOT NULL,
ADD COLUMN     "initial" BIGINT NOT NULL,
ADD COLUMN     "net" BIGINT NOT NULL,
ADD COLUMN     "outcome" BIGINT NOT NULL,
ADD COLUMN     "refund" BIGINT NOT NULL;

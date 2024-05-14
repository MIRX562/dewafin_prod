/*
  Warnings:

  - You are about to drop the `_EmployeeToTask` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `employeeId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- DropForeignKey
ALTER TABLE "_EmployeeToTask" DROP CONSTRAINT "_EmployeeToTask_A_fkey";

-- DropForeignKey
ALTER TABLE "_EmployeeToTask" DROP CONSTRAINT "_EmployeeToTask_B_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "employeeId" TEXT NOT NULL,
ADD COLUMN     "priority" "Priority" NOT NULL;

-- DropTable
DROP TABLE "_EmployeeToTask";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

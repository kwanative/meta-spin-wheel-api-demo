-- CreateTable
CREATE TABLE "m_level_point" (
    "id" SERIAL NOT NULL,
    "level_no" INTEGER NOT NULL,
    "level_name" TEXT NOT NULL,
    "point" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "m_level_point_pkey" PRIMARY KEY ("id")
);

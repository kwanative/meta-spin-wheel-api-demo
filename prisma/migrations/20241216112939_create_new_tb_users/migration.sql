-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "ip_address" TEXT,
    "name" TEXT,
    "point" INTEGER,
    "character" INTEGER,
    "gold_coin" INTEGER,
    "energy" INTEGER,
    "map" INTEGER,
    "auto" INTEGER,
    "x2_coin" INTEGER,
    "bg_map" INTEGER,
    "auto_s" INTEGER,
    "auto_m" INTEGER,
    "auto_l" INTEGER,
    "power_s" INTEGER,
    "power_m" INTEGER,
    "power_l" INTEGER,
    "bonus" INTEGER,
    "level" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_ip_address_key" ON "users"("ip_address");

import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 120 }).notNull(),
  businessName: varchar("business_name", { length: 160 }).notNull(),
  email: varchar("email", { length: 254 }).notNull(),
  phone: varchar("phone", { length: 40 }),
  service: varchar("service", { length: 100 }).notNull(),
  budget: varchar("budget", { length: 80 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type NewEnquiry = typeof enquiries.$inferInsert;

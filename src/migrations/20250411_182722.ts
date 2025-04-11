import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "haus-grieta"."users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."page_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."page_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."page_blocks_promo" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"title" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."page_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"quote" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."page_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."page_blocks_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"title" varchar NOT NULL,
  	"content" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."page_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."page_blocks_call_to_action" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."page" (
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"page_id" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."header_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"page_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."footer_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"page_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "haus-grieta"."footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"about" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"facebook" varchar NOT NULL,
  	"twitter" varchar NOT NULL,
  	"instagram" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_hero" ADD CONSTRAINT "page_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "haus-grieta"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_hero" ADD CONSTRAINT "page_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "haus-grieta"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_content" ADD CONSTRAINT "page_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "haus-grieta"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_promo" ADD CONSTRAINT "page_blocks_promo_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "haus-grieta"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_promo" ADD CONSTRAINT "page_blocks_promo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "haus-grieta"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_testimonials_items" ADD CONSTRAINT "page_blocks_testimonials_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "haus-grieta"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_testimonials_items" ADD CONSTRAINT "page_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "haus-grieta"."page_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_testimonials" ADD CONSTRAINT "page_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "haus-grieta"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_features_items" ADD CONSTRAINT "page_blocks_features_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "haus-grieta"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_features_items" ADD CONSTRAINT "page_blocks_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "haus-grieta"."page_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_features" ADD CONSTRAINT "page_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "haus-grieta"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."page_blocks_call_to_action" ADD CONSTRAINT "page_blocks_call_to_action_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "haus-grieta"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "haus-grieta"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "haus-grieta"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "haus-grieta"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "haus-grieta"."page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "haus-grieta"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "haus-grieta"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."header_items" ADD CONSTRAINT "header_items_page_id_page_id_fk" FOREIGN KEY ("page_id") REFERENCES "haus-grieta"."page"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."header_items" ADD CONSTRAINT "header_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "haus-grieta"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "haus-grieta"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."footer_items" ADD CONSTRAINT "footer_items_page_id_page_id_fk" FOREIGN KEY ("page_id") REFERENCES "haus-grieta"."page"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "haus-grieta"."footer_items" ADD CONSTRAINT "footer_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "haus-grieta"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "haus-grieta"."users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "haus-grieta"."users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "haus-grieta"."users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "haus-grieta"."media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "haus-grieta"."media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "haus-grieta"."media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "page_blocks_hero_order_idx" ON "haus-grieta"."page_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_hero_parent_id_idx" ON "haus-grieta"."page_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_hero_path_idx" ON "haus-grieta"."page_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_blocks_hero_image_idx" ON "haus-grieta"."page_blocks_hero" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_content_order_idx" ON "haus-grieta"."page_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_content_parent_id_idx" ON "haus-grieta"."page_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_content_path_idx" ON "haus-grieta"."page_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_blocks_promo_order_idx" ON "haus-grieta"."page_blocks_promo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_promo_parent_id_idx" ON "haus-grieta"."page_blocks_promo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_promo_path_idx" ON "haus-grieta"."page_blocks_promo" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_blocks_promo_image_idx" ON "haus-grieta"."page_blocks_promo" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_testimonials_items_order_idx" ON "haus-grieta"."page_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_testimonials_items_parent_id_idx" ON "haus-grieta"."page_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_testimonials_items_image_idx" ON "haus-grieta"."page_blocks_testimonials_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_testimonials_order_idx" ON "haus-grieta"."page_blocks_testimonials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_testimonials_parent_id_idx" ON "haus-grieta"."page_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_testimonials_path_idx" ON "haus-grieta"."page_blocks_testimonials" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_blocks_features_items_order_idx" ON "haus-grieta"."page_blocks_features_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_features_items_parent_id_idx" ON "haus-grieta"."page_blocks_features_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_features_items_image_idx" ON "haus-grieta"."page_blocks_features_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_features_order_idx" ON "haus-grieta"."page_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_features_parent_id_idx" ON "haus-grieta"."page_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_features_path_idx" ON "haus-grieta"."page_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_blocks_call_to_action_order_idx" ON "haus-grieta"."page_blocks_call_to_action" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "page_blocks_call_to_action_parent_id_idx" ON "haus-grieta"."page_blocks_call_to_action" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "page_blocks_call_to_action_path_idx" ON "haus-grieta"."page_blocks_call_to_action" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "page_updated_at_idx" ON "haus-grieta"."page" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "page_created_at_idx" ON "haus-grieta"."page" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "haus-grieta"."payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "haus-grieta"."payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "haus-grieta"."payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "haus-grieta"."payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "haus-grieta"."payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "haus-grieta"."payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "haus-grieta"."payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "haus-grieta"."payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_page_id_idx" ON "haus-grieta"."payload_locked_documents_rels" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "haus-grieta"."payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "haus-grieta"."payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "haus-grieta"."payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "haus-grieta"."payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "haus-grieta"."payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "haus-grieta"."payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "haus-grieta"."payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "haus-grieta"."payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "haus-grieta"."payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "header_items_order_idx" ON "haus-grieta"."header_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_items_parent_id_idx" ON "haus-grieta"."header_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_items_page_idx" ON "haus-grieta"."header_items" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "header_logo_idx" ON "haus-grieta"."header" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "footer_items_order_idx" ON "haus-grieta"."footer_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_items_parent_id_idx" ON "haus-grieta"."footer_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_items_page_idx" ON "haus-grieta"."footer_items" USING btree ("page_id");`)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "haus-grieta"."users" CASCADE;
  DROP TABLE "haus-grieta"."media" CASCADE;
  DROP TABLE "haus-grieta"."page_blocks_hero" CASCADE;
  DROP TABLE "haus-grieta"."page_blocks_content" CASCADE;
  DROP TABLE "haus-grieta"."page_blocks_promo" CASCADE;
  DROP TABLE "haus-grieta"."page_blocks_testimonials_items" CASCADE;
  DROP TABLE "haus-grieta"."page_blocks_testimonials" CASCADE;
  DROP TABLE "haus-grieta"."page_blocks_features_items" CASCADE;
  DROP TABLE "haus-grieta"."page_blocks_features" CASCADE;
  DROP TABLE "haus-grieta"."page_blocks_call_to_action" CASCADE;
  DROP TABLE "haus-grieta"."page" CASCADE;
  DROP TABLE "haus-grieta"."payload_locked_documents" CASCADE;
  DROP TABLE "haus-grieta"."payload_locked_documents_rels" CASCADE;
  DROP TABLE "haus-grieta"."payload_preferences" CASCADE;
  DROP TABLE "haus-grieta"."payload_preferences_rels" CASCADE;
  DROP TABLE "haus-grieta"."payload_migrations" CASCADE;
  DROP TABLE "haus-grieta"."header_items" CASCADE;
  DROP TABLE "haus-grieta"."header" CASCADE;
  DROP TABLE "haus-grieta"."footer_items" CASCADE;
  DROP TABLE "haus-grieta"."footer" CASCADE;`)
}

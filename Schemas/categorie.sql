CREATE TABLE categorie (
  rowid int NOT NULL,
  entity int NOT NULL DEFAULT '1',
  fk_parent int NOT NULL DEFAULT '0',
  label varchar(180) NOT NULL,
  ref_ext varchar(255) DEFAULT NULL,
  type int NOT NULL DEFAULT '1',
  description text,
  color varchar(8) DEFAULT NULL,
  fk_soc int DEFAULT NULL,
  visible int NOT NULL DEFAULT '1',
  date_creation datetime DEFAULT NULL,
  tms timestamp NOT NULL,
  fk_user_creat int DEFAULT NULL,
  fk_user_modif int DEFAULT NULL,
  import_key varchar(14) DEFAULT NULL,
  PRIMARY KEY (rowid)
)

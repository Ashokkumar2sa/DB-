CREATE TABLE llx_extrafields (
  rowid int NOT NULL,
  name varchar(64) NOT NULL,
  entity int NOT NULL DEFAULT '1',
  elementtype varchar(64) NOT NULL DEFAULT 'member',
  label varchar(255) NOT NULL,
  type varchar(8) DEFAULT NULL,
  size varchar(8) DEFAULT NULL,
  fieldcomputed text,
  fielddefault varchar(255) DEFAULT NULL,
  fieldunique int DEFAULT '0',
  fieldrequired int DEFAULT '0',
  perms varchar(255) DEFAULT NULL,
  enabled varchar(255) DEFAULT NULL,
  pos int DEFAULT '0',
  alwayseditable int DEFAULT '0',
  param text,
  list varchar(255) DEFAULT '1',
  printable int DEFAULT '0',
  totalizable int DEFAULT '0',
  langs varchar(64) DEFAULT NULL,
  help text,
  fk_user_author int DEFAULT NULL,
  fk_user_modif int DEFAULT NULL,
  datec datetime DEFAULT NULL,
  tms timestamp NOT NULL ,
  PRIMARY KEY (rowid),
  CONSTRAINT uk_extrafields_name UNIQUE(name,entity,elementtype)
)
CREATE TABLE adherent_type (
  rowid int NOT NULL,
  entity int NOT NULL DEFAULT '1',
  tms timestamp NOT NULL,
  statut int NOT NULL DEFAULT '0',
  libelle varchar(50) NOT NULL,
  morphy varchar(3) NOT NULL,
  duration varchar(6) DEFAULT NULL,
  subscription varchar(3) NOT NULL DEFAULT '1',
  amount float DEFAULT NULL,
  vote varchar(3) NOT NULL DEFAULT '1',
  note text,
  mail_valid text,
  PRIMARY KEY (rowid),
  CONSTRAINT uk_adherent_type_libelle UNIQUE(libelle,entity) 
)
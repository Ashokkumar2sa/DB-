CREATE TABLE societe_commerciaux (
  rowid int NOT NULL,
  fk_soc int DEFAULT NULL,
  fk_user int DEFAULT NULL,
  import_key varchar(14) DEFAULT NULL,
  PRIMARY KEY (rowid),
  CONSTRAINT uk_societe_commerciaux UNIQUE(fk_soc,fk_user)
)

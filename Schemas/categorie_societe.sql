CREATE TABLE categorie_societe (
  fk_categorie int NOT NULL,
  fk_soc int NOT NULL,
  import_key varchar(14) DEFAULT NULL,
  PRIMARY KEY (fk_categorie,fk_soc),
  CONSTRAINT idx_categorie_societe_fk_categorie UNIQUE(fk_categorie),
  CONSTRAINT idx_categorie_societe_fk_societe UNIQUE(fk_soc),
  CONSTRAINT fk_categorie_societe_categorie_rowid FOREIGN KEY (fk_categorie) REFERENCES dbo.categorie (rowid),
  CONSTRAINT fk_categorie_societe_fk_soc FOREIGN KEY (fk_soc) REFERENCES dbo.societe (rowid)
) 

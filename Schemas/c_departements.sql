CREATE TABLE c_departements (
  rowid int NOT NULL,
  code_departement varchar(6) NOT NULL,
  fk_region int DEFAULT NULL,
  cheflieu varchar(50) DEFAULT NULL,
  tncc int DEFAULT NULL,
  ncc varchar(50) DEFAULT NULL,
  nom varchar(50) DEFAULT NULL,
  active int NOT NULL DEFAULT '1',
  PRIMARY KEY (rowid),
  CONSTRAINT uk_departements UNIQUE(code_departement,fk_region),
  CONSTRAINT idx_departements_fk_region UNIQUE(fk_region),
  CONSTRAINT fk_departements_fk_region FOREIGN KEY (fk_region) REFERENCES dbo.c_regions (code_region)
)
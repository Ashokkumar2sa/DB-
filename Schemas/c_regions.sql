CREATE TABLE c_regions (
  rowid int NOT NULL,
  code_region int NOT NULL,
  fk_pays int NOT NULL,
  cheflieu varchar(50) DEFAULT NULL,
  tncc int DEFAULT NULL,
  nom varchar(100) DEFAULT NULL,
  active INt NOT NULL DEFAULT '1',
  PRIMARY KEY (rowid),
  CONSTRAINT uk_code_region UNIQUE(code_region),
  CONSTRAINT idx_c_regions_fk_pays UNIQUE(fk_pays),
  CONSTRAINT fk_c_regions_fk_pays FOREIGN KEY (fk_pays) REFERENCES dbo.c_country (rowid)
)

CREATE TABLE c_country (
  rowid int NOT NULL,
  code varchar(2) NOT NULL,
  code_iso varchar(3) DEFAULT NULL,
  label varchar(50) NOT NULL,
  eec int DEFAULT NULL,
  active int NOT NULL DEFAULT '1',
  favorite int NOT NULL DEFAULT '0',
  PRIMARY KEY (rowid),
  CONSTRAINT idx_c_country_code UNIQUE(code),
  CONSTRAINT idx_c_country_label UNIQUE(label),
  CONSTRAINT idx_c_country_code_iso UNIQUE(code_iso)
)
CREATE TABLE c_stcomm (
  id int NOT NULL,
  code varchar(12) NOT NULL,
  libelle varchar(30) DEFAULT NULL,
  picto varchar(128) DEFAULT NULL,
  active int NOT NULL DEFAULT '1',
  PRIMARY KEY (id),
  CONSTRAINT uk_c_stcomm UNIQUE(code)
)

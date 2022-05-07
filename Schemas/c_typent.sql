CREATE TABLE llx_c_typent (
  id int NOT NULL,
  code varchar(12) NOT NULL,
  libelle varchar(64) DEFAULT NULL,
  fk_country int DEFAULT NULL,
  active int NOT NULL DEFAULT '1',
  module varchar(32) DEFAULT NULL,
  position int NOT NULL DEFAULT '0',
  PRIMARY KEY (id),
  CONSTRAINT uk_c_typent UNIQUE(code)
)
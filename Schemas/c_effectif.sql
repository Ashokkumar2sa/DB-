CREATE TABLE c_effectif (
  id int NOT NULL,
  code varchar(12) NOT NULL,
  libelle varchar(30) DEFAULT NULL,
  active int NOT NULL DEFAULT '1',
  module varchar(32) DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT uk_c_effectif UNIQUE(code)
)
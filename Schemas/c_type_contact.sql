CREATE TABLE llx_c_type_contact (
  rowid int NOT NULL,
  element varchar(30) NOT NULL,
  source varchar(8) NOT NULL DEFAULT 'external',
  code varchar(32) NOT NULL,
  libelle varchar(64) NOT NULL,
  active int NOT NULL DEFAULT '1',
  module varchar(32) DEFAULT NULL,
  position int NOT NULL DEFAULT '0',
  PRIMARY KEY (rowid),
  CONSTRAINT uk_c_type_contact_id UNIQUE(element,source,code)
)
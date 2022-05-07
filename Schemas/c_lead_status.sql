CREATE TABLE llx_c_lead_status (
  rowid int NOT NULL,
  code varchar(10) DEFAULT NULL,
  label varchar(50) DEFAULT NULL,
  position int DEFAULT NULL,
  per_cent float DEFAULT NULL,
  active int NOT NULL DEFAULT '1',
  PRIMARY KEY (rowid),
  CONSTRAINT uk_c_lead_status_code UNIQUE(code)
)
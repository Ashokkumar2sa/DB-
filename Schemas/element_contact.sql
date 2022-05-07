CREATE TABLE element_contact (
  rowid int NOT NULL,
  datecreate datetime DEFAULT NULL,
  statut int DEFAULT '5',
  element_id int NOT NULL,
  fk_c_type_contact int NOT NULL,
  fk_socpeople int NOT NULL,
  PRIMARY KEY (rowid),
  CONSTRAINT idx_element_contact_idx1 UNIQUE(element_id,fk_c_type_contact,fk_socpeople),
  CONSTRAINT idx_element_contact_fk_socpeople UNIQUE(fk_socpeople),
  CONSTRAINT fk_element_contact_fk_c_type_contact FOREIGN KEY (fk_c_type_contact) REFERENCES dbo.c_type_contact (rowid)
)

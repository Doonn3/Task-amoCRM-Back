type Tag = {
  id?: number;
};

type Contact = {
  id?: number;
  is_main?: string;
};

type Company = {
  id?: number;
};

type Source = {
  external_id?: number;
  type?: string;
};

type Embedded = {
  tags?: Tag[];
  contacts?: Contact[];
  companies?: Company[];
  source?: Source;
};

export type DealType = {
  name?: string;
  price?: number;
  status_id?: number;
  pipeline_id?: number;
  created_by?: number;
  updated_by?: number;
  closed_at?: number;
  created_at?: number;
  updated_at?: number;
  loss_reason_id?: number;
  responsible_user_id?: number;
  custom_fields_values?: any[];
  _embedded?: Embedded;
};

type IDType = {
  id: number;
};

type RequestIDType = {
  request_id: string;
};

type LeadsType = {
  leads: (IDType & RequestIDType)[];
};

export type DealLeadsType = {
  _embedded: LeadsType;
};

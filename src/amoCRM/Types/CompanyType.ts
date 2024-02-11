type Tag = {
  id: number;
  name: string;
};

type Embedded = {
  companies: Tag[];
};

export type CompanyType = {
  name?: string;
  responsible_user_id?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: number;
  updated_at?: number;
  custom_fields_values?: any[];
  _embedded?: Embedded;
  request_id?: string;
};

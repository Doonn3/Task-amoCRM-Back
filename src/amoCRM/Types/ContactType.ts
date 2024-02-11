type TagsType = {
  id: number;
  request_id: string;
};

type EmbeddedType = {
  contacts: TagsType[];
};

export type ContactType = {
  name?: string;
  first_name?: string;
  last_name?: string;
  responsible_user_id?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: number;
  updated_at?: number;
  //custom_fields_values: []; //Массив, содержащий информацию по значениям дополнительных полей, заданных для данного контакта. Примеры заполнения полей

  _embedded?: EmbeddedType;
  request_id?: string;
};

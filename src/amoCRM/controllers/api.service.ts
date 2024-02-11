import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { DealType } from '../Types/DealType';
import { ContactType } from '../Types/ContactType';
import { CompanyType } from '../Types/CompanyType';

type AccessType = {
  access_token: string;
  base_domain: string;
};

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {}

  async createDealLeads(deals?: DealType[]) {
    try {
      const access = await this.getAccess();

      const url = `https://${access.base_domain}/api/v4/leads`;

      const res$ = this.httpService.post(url, deals, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access.access_token}`,
        },
      });

      const res = await firstValueFrom(res$);

      if (res.status >= 400) {
        throw new HttpException(res.data, res.status);
      }

      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async createContact(contacts?: ContactType[]) {
    try {
      const access = await this.getAccess();
      const url = `https://${access.base_domain}/api/v4/contacts`;
      const res$ = this.httpService.post(url, contacts, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access.access_token}`,
        },
      });

      const res = await firstValueFrom(res$);

      if (res.status >= 400) {
        throw new HttpException(res.data, res.status);
      }

      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async createCompanies(companies?: CompanyType[]) {
    try {
      const access = await this.getAccess();
      const url = `https://${access.base_domain}/api/v4/companies`;
      const res$ = this.httpService.post(url, companies, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access.access_token}`,
        },
      });

      const res = await firstValueFrom(res$);

      if (res.status >= 400) {
        throw new HttpException(res.data, res.status);
      }

      return res.data;
    } catch (error) {
      throw error;
    }
  }

  private async getAccess(): Promise<AccessType> {
    const url = 'https://test.gnzs.ru/oauth/get-token.php';
    try {
      const res$ = this.httpService.get<AccessType>(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-Client-Id': 31550986,
        },
      });
      const res = await firstValueFrom(res$);

      return res.data;
    } catch (error) {
      console.error('Error in getAccess:', error);
      throw error;
    }
  }
}

import {
  Controller,
  Post,
  HttpCode,
  Body,
  HttpException,
} from '@nestjs/common';
import { ApiService } from './api.service';
import { DealType } from '../Types/DealType';
import { ContactType } from '../Types/ContactType';
import { CompanyType } from '../Types/CompanyType';

@Controller()
export class ApiController {
  constructor(private readonly appService: ApiService) {}

  @Post('api-post/deal/leads')
  @HttpCode(200)
  async createDealLeads(@Body() deals?: DealType[]) {
    try {
      const result = await this.appService.createDealLeads(deals);

      return result;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data.detail || error.message;
      throw new HttpException(message, status);
    }
  }

  @Post('api-post/contacts')
  @HttpCode(200)
  async createContact(@Body() contacts?: ContactType[]) {
    try {
      const result = await this.appService.createContact(contacts);
      return result;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data.detail || error.message;
      throw new HttpException(message, status);
    }
  }

  @Post('api-post/companies')
  @HttpCode(200)
  async createCompanies(@Body() companies?: CompanyType[]) {
    try {
      const result = await this.appService.createCompanies(companies);
      console.log(result);
      return result;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data.detail || error.message;
      throw new HttpException(message, status);
    }
  }
}

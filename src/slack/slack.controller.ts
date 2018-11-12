import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { GoogleSearchResponse } from '../shared/google-search';
import { SlackService } from './slack.service';

@Controller('slack')
export class SlackController {

  constructor(private readonly slackService: SlackService) {
  }

  @Get('test')
  async testSearchStackoverflow(): Promise<GoogleSearchResponse> {
    try {
      return await this.slackService.searchSo();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}

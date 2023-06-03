import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

export interface IpInfo {
  ip: string;
  city: string;
  region: string;
}

export interface GetIpInfoResponse {
  data: IpInfo;
}

export interface GetIpInfoParam {
  ip: string;
}

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getIpInfo(ipAddress: string): Promise<IpInfo> {
    const axiosResponse = await firstValueFrom(
      this.httpService.get(`https://ipinfo.io/${ipAddress}/geo`),
    );
    const data: IpInfo = axiosResponse.data;
    const response: IpInfo = {
      ip: data.ip,
      city: data.ip,
      region: data.region,
    };
    return response;
  }
}

/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AuthService } from './providers/auth.service';
import { UserService } from './providers/user.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [
    ApiConfiguration,
    AuthService,
    UserService],
})
export class ApiModule {
  static forRoot(
    customParams: ApiConfigurationInterface
  ): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: { rootUrl: customParams.rootUrl },
        },
      ],
    };
  }
}

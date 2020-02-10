import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.modules';
import { ShareModule } from '../share/share.module';
import { PagesModule } from '../pages/pages.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [],
  // AppRoutingModule 应放在 PagesModule 之后引入
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, ShareModule, PagesModule, ServicesModule, AppRoutingModule],
  exports: [ShareModule, AppRoutingModule],
  providers: []
})
export class CoreModule {
  /**
   * 限制CoreModule只能被AppModule引入
   * SkipSelf装饰器 跳过模块自身,避免无限循环
   * Optional装饰器 允许模块不存在,不存在时,会给模块赋值为null
   * @param CoreModule 父级Module引入CoreModule时,会执行构造函数,
   * 首次引入不报错，再次引入会抛出错误
   */
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 只能被AppModule引入.');
    }
  }
}

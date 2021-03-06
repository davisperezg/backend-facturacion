import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { ModuleModule } from './module/module.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { OptionModule } from './option/option.module';
import { ModuleOptionsModule } from './module-options/module-options.module';
import { AuthModule } from './auth/auth.module';
import { SupplierModule } from './supplier/supplier.module';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
import { ModelModule } from './model/model.module';
import { MarkModule } from './mark/mark.module';
import { UnitMeasureModule } from './unit-measure/unit-measure.module';
import { FactModule } from './fact/fact.module';
import { FactDetailsModule } from './fact-details/fact-details.module';
import { ConfigModule } from '@nestjs/config';
import { SequenceModule } from './sequence/sequence.module';
import { AreaModule } from './area/area.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRoot(process.env.URL_DATABASE, {
      useFindAndModify: false,
      useCreateIndex: true,
    }),
    MenuModule,
    ModuleModule,
    UserModule,
    RoleModule,
    OptionModule,
    ModuleOptionsModule,
    AuthModule,
    SupplierModule,
    ProductModule,
    ClientModule,
    ModelModule,
    MarkModule,
    UnitMeasureModule,
    FactModule,
    FactDetailsModule,
    SequenceModule,
    AreaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

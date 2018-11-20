import { NgModule } from '@angular/core';
import { AnalyticsDirective } from './analytics/analytics';
import { IconServiceDirective } from './icon-service/icon-service';
@NgModule({
	declarations: [AnalyticsDirective,
    IconServiceDirective],
	imports: [],
	exports: [AnalyticsDirective,
    IconServiceDirective]
})
export class DirectivesModule {}

import { Directive } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the AnalyticsDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[analytics]' // Attribute selector
})
export class AnalyticsDirective {

  constructor(private ga: GoogleAnalytics) {
    console.log('Hello AnalyticsDirective Directive');
  }


  call(screen: string){
    this.ga.startTrackerWithId('UA-124802412-1')
    .then(() => {
      console.log('Google analytics is ready now');
         this.ga.trackView(screen);
      // Tracker is ready
      // You can now track pages or set additional information such as AppVersion or UserId
      this.ga.setAllowIDFACollection(true);
      this.ga.setAppVersion("1");
    })
    .catch(e => console.log('Error starting GoogleAnalytics', e));
  }
}

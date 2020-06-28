import 'package:angular/angular.dart';

import 'package:angular_components/angular_components.dart';
import 'package:angular_components/model/ui/icon.dart';

// AngularDart info: https://angulardart.dev
// Components info: https://angulardart.dev/components

@Component(
  selector: 'my-app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [
    MaterialFabComponent,
    MaterialIconComponent,
  ],
)
class AppComponent {
  int count=0;
  void incrementCount(){
    this.count++;
  }
}

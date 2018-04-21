import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Should be imported for 'ngModel'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AngBindingComponent } from './ang-binding/ang-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ComponentDirective } from './directives/component.directive';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    AngBindingComponent,
    EventBindingComponent,
    TwoWayDataComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    ComponentDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

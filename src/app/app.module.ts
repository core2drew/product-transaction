import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { TransactionCardComponent } from './transaction-card/transaction-card.component';
import { CardComponent } from './card/card.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { ImageOptionComponent } from './image-option/image-option.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    TransactionCardComponent,
    CardComponent,
    BarChartComponent,
    SelectFieldComponent,
    ImageOptionComponent,
    BubbleChartComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

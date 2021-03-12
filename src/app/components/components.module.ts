import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddBtnComponent } from './add-btn/add-btn.component';
import { ArticleTableComponent } from './article-table/article-table.component';
import { ArticleTableRowComponent } from './article-table/article-table-row/article-table-row.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddProjectComponent } from './add-project/add-project.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AddBtnComponent,
    ArticleTableComponent,
    ArticleTableRowComponent,
    AddQuoteComponent,
    AddBillComponent,
    AddClientComponent,
    AddEmployeeComponent,
    AddExpenseComponent,
    AddProjectComponent,
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AddBtnComponent,
    ArticleTableComponent,
    ArticleTableRowComponent,
    AddQuoteComponent,
    AddBillComponent,
    AddClientComponent,
    AddEmployeeComponent,
    AddExpenseComponent,
    AddProjectComponent,
  ]
})
export class ComponentsModule { }

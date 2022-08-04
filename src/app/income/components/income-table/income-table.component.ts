import {Component, Input} from '@angular/core';
import {IncomeSummary} from "../../models/income-summary.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-income-table',
  templateUrl: './income-table.component.html',
  styleUrls: ['./income-table.component.scss']
})
export class IncomeTableComponent {

  constructor(private router : Router) { }

  @Input() incomeList! : IncomeSummary[];
  @Input() displayedColumns! : string[];

  showIncome(id:number) {
    this.router.navigateByUrl('/income/'+id);
  }

  redirectAddNewIncome() {
    this.router.navigateByUrl('/income/add');
  }

}

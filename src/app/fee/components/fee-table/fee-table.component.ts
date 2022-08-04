import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {FeeSummary} from "../../model/fee-summary.model";

@Component({
  selector: 'app-fee-table',
  templateUrl: './fee-table.component.html',
  styleUrls: ['./fee-table.component.scss']
})
export class FeeTableComponent {

  constructor(private router : Router) { }

  @Input() feeList! : FeeSummary[];
  @Input() displayedColumns! : string[];

  showFee(id:number) {
    this.router.navigateByUrl('/fee/'+id);
  }

  redirectAddNewFee() {
    this.router.navigateByUrl('/fee/add');
  }

}

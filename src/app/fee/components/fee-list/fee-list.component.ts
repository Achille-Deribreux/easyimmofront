import { Component, OnInit } from '@angular/core';
import {FeeService} from "../../fee.service";
import {FeeSummary} from "../../model/fee-summary.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-fee-list',
  templateUrl: './fee-list.component.html',
  styleUrls: ['./fee-list.component.scss']
})
export class FeeListComponent implements OnInit {

  constructor(private feeService : FeeService) { }

  fees!: FeeSummary[];
  displayedColumns: string[] = ['date', 'amount', 'supplier',"button"];

  ngOnInit(): void {
     this.feeService.getAllFees().subscribe({
        next: (fees: FeeSummary[]) => {
          this.fees = fees;
        }
      }
    );
  }

}

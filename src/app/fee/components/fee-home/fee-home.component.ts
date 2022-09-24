import { Component, OnInit } from '@angular/core';
import {FeeService} from "../../fee.service";
import {FeeSummary} from "../../model/fee-summary.model";

@Component({
  selector: 'app-fee-list',
  templateUrl: './fee-home.component.html',
  styleUrls: ['./fee-home.component.scss']
})
export class FeeHomeComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import {FeeService} from "../../fee.service";
import {Router} from "@angular/router";
import {FeeSummary} from "../../model/fee-summary.model";

@Component({
  selector: 'app-fee-list',
  templateUrl: './fee-list.component.html',
  styleUrls: ['./fee-list.component.scss']
})
export class FeeListComponent implements OnInit {

  constructor(private feeService : FeeService, private router : Router) { }

  fees!: FeeSummary[];
  displayedColumns: string[] = ['date', 'amount', 'supplier',"button"];

  ngOnInit(): void {
    this.fees = this.feeService.getAllFees();
  }

  showFee(id:number) {
    this.router.navigateByUrl('/fee/'+id);
  }

}

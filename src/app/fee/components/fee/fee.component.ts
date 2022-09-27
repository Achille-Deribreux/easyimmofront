import { Component, OnInit } from '@angular/core';
import {FeeService} from "../../fee.service";
import {FeeDetail} from "../../model/fee-detail";
import {ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.scss']
})
export class FeeComponent implements OnInit {

  fee!: FeeDetail;

  constructor(private feeService: FeeService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.feeService.getFee(this.route.snapshot.params['id']).subscribe({
      next: (fee: FeeDetail) => {
        this.fee = fee;
    },
    error: (err) => {console.log(err);}
    });
  }

  redirectToProperty():void {
    this.router.navigateByUrl('property/'+this.fee.property.id);
  }

  deleteFee(id: number):void {
    this.feeService.deleteFee(id);
    this.router.navigateByUrl('fees');
  }
}

import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAccModalComponent } from '../add-acc-modal/add-acc-modal.component';
import { AccDtoList } from '../shared/models/account';
import { DataService } from '../shared/services/data.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  accInfo: AccDtoList[] = [];
  accs:AccDtoList[] = [];
  constructor(
    public dialog: MatDialog,
    private dataService: DataService
    ) {}
  ngOnInit(): void {
    //localstorageden datayı çekip yükler
    this.dataService.getData().subscribe(data => {
      this.accs = data
    })
  }

  //modali açar ve hesap ekledikten sonra dönen veriyi arraye ekler localstorage basar
  openDialog(): void {
    const dialogRef = this.dialog.open(AddAccModalComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.accInfo = result;
      this.dataService.addData(this.accInfo[0])
    });
  }
}

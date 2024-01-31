import { NgModule, Component, enableProdMode } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { DxDataGridModule } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
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
  url!: string;
  accInfo: AccDtoList[] = [];
  dataSource: any = {};
  accs:AccDtoList[] = [];
  constructor(httpClient: HttpClient,
    public dialog: MatDialog,
    private dataService: DataService
    ) {
    // const isNotEmpty = (value: any) => (value !== undefined && value !== null && value !== '');

    // this.dataSource = new CustomStore({
    //   key: 'OrderNumber',
    //   async load(loadOptions: any) {
    //     const url = 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders';

    //     const paramNames = [
    //       'skip', 'take', 'requireTotalCount', 'requireGroupCount',
    //       'sort', 'filter', 'totalSummary', 'group', 'groupSummary',
    //     ];

    //     let params = new HttpParams();

    //     paramNames
    //       .filter((paramName) => isNotEmpty(loadOptions[paramName]))
    //       .forEach((paramName) => {
    //         params = params.set(paramName, JSON.stringify(loadOptions[paramName]));
    //       });

    //     try {
    //       const result: any = await lastValueFrom(httpClient.get(url, { params }));

    //       return {
    //         data: result.data,
    //         totalCount: result.totalCount,
    //         summary: result.summary,
    //         groupCount: result.groupCount,
    //       };
    //     } catch (err) {
    //       throw new Error('Data Loading Error');
    //     }
    //   },
    // });
  }
  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.accs = data
      console.log(data);
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddAccModalComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.accInfo = result;
      console.log(this.accInfo);
      this.dataService.addData(this.accInfo[0])
    });
  }
}
